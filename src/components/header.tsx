import React, { useState } from 'react'
import { Anchor, Drawer, Button } from 'antd';


const { Link } = Anchor;

function AppHeader() {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onclose = () => {
        setVisible(false);
    };
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <i className="fas fa fa-bolt"></i>
                    <a href="http://google.com">Tech</a>
                </div>
                <div className="mobileHidden">
                    <Anchor >
                        <Link href="https://ant.design/components/anchor/" target="_blank" title="Home" />
                        <Link href="#about" title="About" />
                        <Link href="#feature" title="Features" />
                        <Link href="#works" title="How it works" />
                        <Link href="#faq" title="FAQ" />
                        <Link href="#pricing" title="Pricing" />
                        <Link href="#contact" title="Contact" />
                    </Anchor>
                </div>
                <div className="mobileVisible">
                    <Button type="primary" onClick={showDrawer}>
                        <i className="fas fa fa-bars"></i>
                    </Button>
                    <div className="site-drawer-render-in-current-wrapper">
                        <Drawer
                            placement="right"
                            closable={false}
                            onClose={onclose}
                            visible={visible}

                        >
                            <Anchor>
                                <Link href="https://ant.design/components/anchor/" target="_blank" title="Home" />
                                <Link href="#about" title="About" />
                                <Link href="#feature" title="Features" />
                                <Link href="#works" title="How it works" />
                                <Link href="#faq" title="FAQ" />
                                <Link href="#pricing" title="Pricing" />
                                <Link href="#contact" title="Contact" />
                            </Anchor>
                        </Drawer>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AppHeader;