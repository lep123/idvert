import React from 'react'
import LogoImg from '@/assets/logo.png'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Input, Divider, Icon, Select } from 'antd';
import errorImg from '@/assets/touxiang.png'
import './style.less'
const { Search } = Input
const { Option } = Select
export default class extends React.PureComponent {
  imgError = e => {
    e.target.src = errorImg
  }
  handleChange = (value) => {
    console.log(`selected ${value}`);
  }
  render () {
   
    return (
      <div className="pages_home">
        <div className="pages_home_head">
          <img src={LogoImg} alt=""/>
          <div className="pages_home_list">
            <Link to="/formNative">Form Native</Link>
            <Link to="/formAd">Form Ad</Link>
            <Link to="/">List</Link>
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
            <Select 
              defaultValue="lucy"
              style={{ width: 120 }} 
              onChange={this.handleChange}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
        </div>
        <div className="pages_home_body">
          {renderRoutes(this.props.route.routes)}
        </div>
      </div>
    )
  }
}