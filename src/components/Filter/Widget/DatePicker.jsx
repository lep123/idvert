import React from 'react'
import { DatePicker } from 'antd'
import cs from 'classnames'
import moment from 'moment'
const { RangePicker } = DatePicker

export default class extends React.PureComponent {

  onChange = (value, dateString) => {
    const { onChange } = this.props
    onChange && onChange(dateString)
    // console.log('Selected Time: ', value);
    // console.log('Formatted Selected Time: ', dateString);
  }
 
  disabledDate = (current) => {
    return current && current > moment().endOf('day');
  }
  render() {
    const { placeholder } = this.props
    return (
     
      <RangePicker
        disabledDate={this.disabledDate}
        format="YYYY-MM-DD HH:mm"
        onChange={this.onChange}
        placeholder={[placeholder, '']}
        renderExtraFooter={() => 'extra footer'}
      />
    )
  }
}