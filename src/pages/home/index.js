import React from 'react'
import LogoImg from '@/assets/logo.png'
import { NavLink, Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Input, Divider, Icon,  Menu, Dropdown } from 'antd';
import errorImg from '@/assets/touxiang.png'
import './style.less'
const { Search } = Input
export default class extends React.PureComponent {
  imgError = e => {
    e.target.src = errorImg
  }
  handleChange = (value) => {
    console.log(`selected ${value}`);
  }
  render () {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <Link to='/'>管理账户</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
          <Link to="/users/login">退出登录</Link>
        </Menu.Item>
      </Menu>
    )
    return (
      <div className="pages_home">
        <div className="pages_home_head">
          <img src={LogoImg} alt=""/>
          <div className="pages_home_list">
            <NavLink  
              activeClassName="activeLink" 
              to="/formNative"
              exact
            >
              Form Native
            </NavLink>
            <NavLink  
              activeClassName="activeLink"  
              to="/formAd"
              exact
            >
              Form Ad
            </NavLink>
            <NavLink  
              activeClassName="activeLink"  
              to="/"
              exact
            >
              Ad Samples
            </NavLink>
          </div>
          <div className="pages_home_serach">
            <Search
              placeholder="Enter keyword or domain"
              onSearch={value => console.log(value)}
              style={{ width: 400, height: 40, fontSize: '16px' }}
            />
          </div>
          <Divider 
            type="vertical"  
            style={{height:'100%', background: '#666'}}
          />
            <Icon type="bell" className="pages_home_head_ic"/>
            <Icon type="question-circle" className="pages_home_head_ic"/>
          <Divider 
            type="vertical"  
            style={{height:'100%', background: '#666'}}
          />
          <div className="pages_home_users">
            <img src="" alt="" onError={this.imgError}/>
            <div className="pages_home_userInfo">
              <Dropdown overlay={menu} trigger={['click']} >
                <a className="ant-dropdown-link" href="#" className="pages_home_username">
                lep123456789 <Icon type="down" />
                </a>
              </Dropdown>
              <div>
               <Icon type="sketch" /> Vip
              </div>
            </div>
          </div>
        </div>
        <div className="pages_home_body">
          {renderRoutes(this.props.route.routes)}
        </div>
      </div>
    )
  }
}