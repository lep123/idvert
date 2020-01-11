import React from 'react'
import { Tag, Button } from 'antd'

export default class extends React.PureComponent {
  onClose = () => {

  }
  render () {
    const data = [
      {
        "key": 0,
        "label": 'aaa'
      },
      {
        "key": 1,
        "label": 'bbb'
      }
    ]
    return (
      <div className="comm_widget_tooltip">
      {
        data.map(v => (
          <Tag
            closable
            visible={this.state.visible}
            onClose={() => this.onClose()}
            key={v.key}
          >
            {v.label}
          </Tag>
        ))
      }
       
      </div>
    )
  }
}