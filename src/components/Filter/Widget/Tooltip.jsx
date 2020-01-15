import React from 'react'
import { Tag, Button } from 'antd'
import '../style.less'
export default class extends React.PureComponent {
  onClose = (v) => {
    const { onClose } = this.props
    onClose && onClose(v)
  }
  onCloseAll = () => {
    const { onCloseAll } = this.props
    onCloseAll && onCloseAll()
  }
  render () {
    const { data } = this.props
    return (
      <div className="comm_widget_tooltip">
      {
        data && data.map(v => (
            <Tag
              closable
              onClose={() => this.onClose(v)}
              key={v.key}
            >
              {v.label}
            </Tag>
          ))
      }
      <span onClick={this.onCloseAll} >
        clear all
      </span>
      </div>
    )
  }
}