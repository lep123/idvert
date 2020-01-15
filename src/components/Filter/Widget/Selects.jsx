import React from 'react'
import { Select } from 'antd'
import _ from 'loadsh'
const { Option } = Select

export default class extends React.PureComponent {
  onChange = (items) => {
    const { onChange, multiple } = this.props
    let arrs = []
    multiple ? arrs = _.compact(items.map(val => val.key )) : arrs.push(items.key)
    onChange && onChange(arrs)
  }
  render() {
    const { option, placeholder, multiple, disabled} = this.props
    const otherProps = multiple ? { mode: 'multiple', maxTagCount: 1, maxTagTextLength: 5} : {}
    return (
      <Select
        allowClear
        labelInValue
        style={{ width: '200px',margin: '5px' }}
        placeholder={placeholder}
        onChange={this.onChange}
        defaultActiveFirstOption={false}
        showArrow={true}
        disabled={disabled}
        { ...otherProps }
      >
        {
          option && option.map(v => (
              <Option value={v.value}label="China" key={v.key}>
                {v.key}
              </Option>
            ))
        }
      </Select>
    )
  }
}