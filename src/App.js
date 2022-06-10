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
import TomatoHealth from './Components/TomatoHealth';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {

  var viewToShow = (<TomatoQuantity></TomatoQuantity>)

  const changeView = (view) => {
    if(view==="measurement"){
      viewToShow = (<TomatoQuantity></TomatoQuantity>)
    } else if (view==="health"){
      viewToShow = (<TomatoHealth></TomatoHealth>)
    }
  };
  
  return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />} onClick={() => changeView("measurement")}>
              Medición
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />} onClick={() => changeView("health")}>
              Estado de salud
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ leftPadding: 10, fontWeight: "bold" }}> Medición de las plantas de tomate </Header>
          <Content style={{ margin: '0 16px' }}>
            {viewToShow}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Juan Diego Naranjo y Juan José Calderón</Footer>
        </Layout>
      </Layout>
    );
}

export default App;