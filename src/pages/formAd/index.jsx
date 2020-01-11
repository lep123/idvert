import React from 'react'
import Forms from '@@/Forms'
import { requestPost } from '@/utils/request'
import Api from '@/services/api'
import Tooltip from '@@/Filter/Widget/Tooltip'
import CheckBox from '@@/Filter/Widget/CheckBox'
import Selects from '@@/Filter/Widget/Selects'
import { message } from 'antd'
import './style.less'
export default class extends React.PureComponent {
  
  getOptions = (options) => {
    requestPost(Api.setData, {
      info: options
    })
      .then(res => {
        if(res.code == 200) {
          message.success('添加成功')
        } else {
          message.warning('添加失败')
        }
      })
  }
  
  onClick = (options) => {
    console.log(options,111)
  }
  
  render () { 
    const data = [
      {
        id: 0,
        value: 'Search Position',
        active: true
      },
      {
        id:1,
        value:'AD URL',
        active: false
      }
    ]
    const option = [
      {
        "value": "Casino & Crypto",
        "key": "Casino & Crypto"
      },
      {
        "value": "Diet",
        "key": "Diet"
      },
      {
        "value": "Sweepstakes",
        "key": "Sweepstakes"
      },
      {
        "value": "ED/Muscle",
        "key": "ED/Muscle"
      },
      {
        "value": "Skin",
        "key": "Skin"
      },
      {
        "value": "Other",
        "key": "Other"
      }
    ]
    return (
    
      <div className="pages_formNative">
      <div className="pages_formNatvie_form">
        <Forms formAd  getFormData={this.getOptions}/>
        <Selects option={option} handleChange={this.handleChange}/>
        <Tooltip />
      </div>
     
    </div>
    )
  }
}