import React from 'react'
import cs from 'classnames'
import Radio from './Widget/Radio'
import CheckBox from './Widget/CheckBox'
import Selects from './Widget/Selects'
import DatePicker from './Widget/DatePicker'
import { Form } from 'antd'

export default
@Form.create({
  onValuesChange (props, changedValues, allValues) {

   props.onChange && props.onChange(allValues)
  }
})
class extends React.PureComponent {
  render () {
    const { getFieldDecorator } = this.props.form
    const { data } = this.props
    const partType = {
      Radio (data) {
        return  getFieldDecorator(data.key)(<Radio { ...data } />)     
      },
      CheckBox (data) {
        return  getFieldDecorator(data.key)(<CheckBox { ...data } />)    
      },
      DatePicker (data) {
        return  getFieldDecorator(data.key)(<DatePicker { ...data } />)    
      },
      Selects (data) {
        return  getFieldDecorator(data.key)(<Selects { ...data } />)    
      },
    }
    return (
     <div className="comm_Formpanel">
       {
        data && data.map(v => (
          <div className="comm_row" key={v.id}>
            {
              v.colum && v.colum.map( val => (
                <div className="comm_list" key={val.label}>
                  <span className="comm_label">{val.label} :</span> 
                  <div className="comm_list_connect">
                   {
                    val.options && val.options.map(item => {
                        return <React.Fragment key={item.key}>
                          { partType[item.type](item)}
                        </React.Fragment>
                    })
                   }
                  </div>
                </div>
              ))
            }
          </div>
         ))
       }
     </div>
    )
  }
}