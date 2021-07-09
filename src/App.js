import React, { Component, useState, useEffect } from 'react';
import './App.css';
import './head.css';
import './Login.css';
import './blox.css';
import './converter.css';

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout >
          <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">One Stock Data-service</Link>}>
            <Navigation>
              {/* <Link to="/login">Login</Link>
              <Link to="/register">Register</Link> */}
            </Navigation>
          </Header>
          <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' ,width: '100px',height: '100%'}} to="/">Data-service</Link>}>
            <Navigation>
              {/* <Link to="/login">Login</Link> */}
              <Link to="/home">หน้าหลัก</Link>
              <Link to="/imstock">ค้นหาหุ้น</Link>
              {/* <Link to="/page3">HIGHTLIGHT</Link> */}
            </Navigation>
          </Drawer>
          <Content class="">
            <Main />       
          </Content>
        </Layout>
      </div>

    );
  }
}

export default App;

// <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' ,width: '100px',height: '100vh'}} to="/">Data-service</Link>}>
//   <Navigation>
//     {/* <Link to="/login">Login</Link> */}
//     <Link to="/home">HOME</Link>
//     <Link to="/imstock">STOCK</Link>
//     {/* <Link to="/page3">HIGHTLIGHT</Link> */}
//   </Navigation>
// </Drawer>