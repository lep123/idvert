import React from 'react'
import FormPanel from './FormPanel'

export default class extends React.PureComponent {
  render () {
    onChange = (v) => {
      console.log(v,1111)
    }
    return (
      <div className="comm_filter">
         <FormPanel onChange={this.onChange} />
      </div>
    )
  }
}
