import React from 'react';
import './App.css';

import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import "antd/dist/antd.css";

import TomatoQuantity from './Components/TomatoQuantity';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
  
  return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ leftPadding: 10, fontWeight: "bold" }}> Tomato Quantity </Header>
          <Content style={{ margin: '0 16px' }}>
            <TomatoQuantity></TomatoQuantity>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Juan Diego Naranjo, Juan Jose Calderon, Jhonnier Isaza & Fabian Portilla</Footer>
        </Layout>
      </Layout>
    );
}

export default App;