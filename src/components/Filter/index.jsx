import React from 'react'
import FormPanel from './FormPanel'
import Tooltip from './Widget/Tooltip'
export default class extends React.PureComponent {
  onChange = (options) => {
    const { onChange } = this.props
    //const { } = options
    onChange && onChange(options)
  }
  render () {
    const { data, checkedData } = this.props
    return (
     
      <div className="comm_filter">
         <FormPanel data={data} onChange={this.onChange} />
         <Tooltip checkedData={checkedData}/>
      </div>
    )
  }
}
