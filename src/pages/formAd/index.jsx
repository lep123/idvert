import React from 'react'
import Forms from '@@/Forms'
import { requestPost } from '@/utils/request'
import Api from '@/services/api'

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
  
  render () { 
   
    return (
    
      <div className="pages_formNative">
      <div className="pages_formNatvie_form">
        <Forms formAd  getFormData={this.getOptions}/>
      
      
      </div>
     
    </div>
    )
  }
}