import React from 'react'
import './style.less'
import Top from '../../components/Top'
import Buttom from '../../components/Buttom'
export default class extends React.PureComponent {
  render () {
    return (
      <div className="pages-box">
          <Top/>
          <Buttom/>
      </div>
    )
  }
}