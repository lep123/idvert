import React from 'react'
import { Spin } from 'antd'
import './style.less'
 
export default class extends React.PureComponent {
  render () {
    const { loading = '' } = this.props
    return (
      loading && (
        <div className="comm-screen-loading">
          <Spin size="large">
           
          </Spin>
        </div>
      )
    )
  }
}