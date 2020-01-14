import React from 'react'
import './style.less'

export default class extends React.PureComponent {
  handelClcik = (v) => {
    console.log(v,111)
  }
  render () {
    return (
      <div className="pages_facebook">
      pages_facebook
      </div>
    )
  }
}