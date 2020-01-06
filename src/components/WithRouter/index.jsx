import React from 'react'
import { renderRoutes } from 'react-router-config'
import { withRouter } from 'react-router-dom'

/**
 * 统一路由监听
 * 登录后不做任何处理 未登录跳转到登录页
 */
export default @withRouter
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
    const { Authority } = this.props
    const token = JSON.parse(localStorage.getItem('persist:root')).userInfo
    // 判断是否登录了
    if (!token) {
      const pathname = history.location.pathname
      // 如果是登录页 不跳转 否则会死循环
      if (!pathname.includes('login')) {
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