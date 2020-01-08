import React from 'react'
import './style.less'
import Top from './top'
export default class extends React.PureComponent {
  render () {
    return (
      <div className="pages-box">
          <Top/>
      </div>
    )
  }
}