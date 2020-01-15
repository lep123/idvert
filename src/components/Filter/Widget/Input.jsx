
import React from 'react'
import '../style.less'
import { Input } from 'antd'
export default class extends React.PureComponent {
  // onChange = e => {
  //   const { onChange } = this.props
  //   console.log(e,111111)
  //   onChange && onChange(e)
  // }
  render () {
    const { placeholder, onChange } = this.props
    return (
      <Input 
        placeholder={placeholder}
        onChange={onChange}
      />
    )
  }
}