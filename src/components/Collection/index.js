import React from 'react'
import './style.less'
import { Icon } from 'antd'
// 收藏组件
export default class extends React.PureComponent {
  state = {
    iconStatus:false
  }
  componentDidMount () {
    const { iconStatus = false } = this.props
    this.setState({
      iconStatus
    })
  }
  onCollection = () => {
    const { iconStatus } = this.state
    const { handelClick } = this.props
    this.setState({
      iconStatus: !iconStatus
    },() => {
      handelClick(this.state.iconStatus)
    })
   
  }
  onClick = () => {
    const { iconStatus } = this.state
    const { iconNo, iconOff } = this.props
    return iconStatus ? iconNo : iconOff
  }
  render () {
    const { style } = this.props
    const { iconStatus } = this.state 
    return (
    <div 
      className="comm_collection" 
      style={style} 
      onClick={this.onCollection}
    >
      <span>{this.onClick()}</span>
      {iconStatus ? 'Uncollect' : 'collect'}
    </div>
    )
  }
}