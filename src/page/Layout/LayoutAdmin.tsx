import React from 'react'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import { Link, Outlet } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const LayoutAdmin = () => {
    type MenuItem = Required<MenuProps>['items'][number];
    const {
        token: { colorBgContainer },
    } = theme.useToken();
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
        getItem('DashBoard', '1'),
        getItem('Product', '2'),
        getItem('Category', '3'),

    ]
    return (
        <Layout>

            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['4']}
                // items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
                //     (icon, index) => ({
                //         key: String(index + 1),
                //         icon: React.createElement(icon),
                //         label: `nav ${index + 1}`,
                //     }),
                // )}
                >
                    <Menu.Item>
                        <Link to={"/admin"}>DashBoard</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={"/admin/product"}>Product</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={"/admin/category"}>Category</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={"/admin/user"}>User</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={"/"}>Clint</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}><Outlet /></div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default LayoutAdmin