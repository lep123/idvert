import React from 'react'
import { Form, Icon, Input, Button, message } from 'antd'
import { requestPost } from '@/utils/request'
import Api from '@/services/api'
import './style.less'
import axios from 'axios'
export default

@Form.create()
class extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        requestPost(Api.reg, values)
          .then( res => {
            if(res.code == 200) {
              message.success('注册成功')
            } else {
              message.warning('注册失败')
              this.props.form.resetFields()
            }
          })
       
      }
    })
  }
  
  render() {
    const { getFieldDecorator } = this.props.form
    return (
        <div className="pages_login_form">
        <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="UserName"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('passWord', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('rePassWord', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="rePassWord"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{width:'100%'}}>
                注册
              </Button>
              
            </Form.Item>
          </Form>
        </div>
    )
  }
}