import React from 'react'
import { renderRoutes } from 'react-router-config'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import login from '../../reducer/login'
/**
 * 统一路由监听
 * 登录后不做任何处理 未登录跳转到登录页
 */
export default @withRouter
@connect((state) => ({
  token: state.login.userInfo
}))
class extends React.PureComponent {
  constructor (props) {
    super(props)
    this.redirect(props)
  }
  
  // nextProps
  componentWillReceiveProps (np) {
    this.redirect(np)
  }
 
  // 重定向
  redirect = np => {
    const { history } = np
    const { Authority, token } = this.props
    // 判断是否登录了
    if (!token) {
      const pathname = history.location.pathname
      // 如果是登录页 不跳转 否则会死循环
      if (!pathname.includes('/users/login')) {
       
        history.push('/users/login')
      }
    }
 
    // 权限拦截
    //!Authority && history.push('/users/login')
  }
 
  render () {
    const { routes } = this.props
    return renderRoutes(routes)
  }
}