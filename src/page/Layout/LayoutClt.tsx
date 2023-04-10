import React from 'react'
import { Breadcrumb, Layout, Menu, theme, MenuProps } from 'antd';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const LayoutClt = () => {
    const navigate = useNavigate()
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    type MenuItem = Required<MenuProps>['items'][number];

    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
        } as MenuItem;
    }
    const items: MenuItem[] = [
        getItem('Home', '1'),
        getItem('Product', '2'),
        getItem('singup', '3'),
        getItem('singin', '4'),
    ]

    let checklogin = (localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")!) : false

    let deletelogin = document.querySelector(".one")
    let deletelogins = document.querySelector(".two")
    if (checklogin.users) {
        deletelogin?.remove()
        deletelogins?.remove()
    }
    const dangxuat = () => {
        localStorage.removeItem("user")
        navigate("/")
        alert("đăng xuất thành công")
    }

    return (
        <Layout>
            <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
                <div
                    style={{
                        float: 'left',
                        width: 120,
                        height: 31,
                        margin: '16px 24px 16px 0',
                        background: 'rgba(255, 255, 255, 0.2)',
                    }}
                />
                <Menu
                    theme="dark"
                    mode="horizontal"
                >
                    <Menu.Item>
                        <Link to={"/"}>Home</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={"/product"}>Product</Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link to={"/singup"}><h6 className='one'>Singup</h6></Link>
                    </Menu.Item><Menu.Item>
                        <Link to={"/singin"}><h6 className='two'>Singin</h6></Link>
                    </Menu.Item>
                    <Menu.Item>
                        <h6 className='four' onClick={() => dangxuat()}>Đăng xuất</h6>
                    </Menu.Item>

                </Menu>
            </Header >
            <Content className="site-layout" style={{ padding: '0 50px' }}>

                <div style={{ padding: 24, minHeight: 380, background: colorBgContainer }}><Outlet /></div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout >
    )
}

export default LayoutClt