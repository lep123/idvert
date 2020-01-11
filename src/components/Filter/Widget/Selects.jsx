import React from 'react'
import { Select } from 'antd'
const { Option } = Select

export default class extends React.PureComponent {
  
  render() {
    const { option, placeholder, handleChange, multiple, disabled} = this.props
    const otherProps = multiple ? { mode: 'multiple', maxTagCount: 1} : {}
    return (
      <Select
        allowClear
        labelInValue
        style={{ width: '100%' }}
        placeholder={placeholder}
        onChange={handleChange}
        defaultActiveFirstOption={false}
        showArrow={true}
        disabled={disabled}
        { ...otherProps }
      >
        {
          option && option.map(v => (
              <Option value={v.value}label="China" key={v.key}>
                {v.value}
              </Option>
            ))
        }
      </Select>
    )
  }
}