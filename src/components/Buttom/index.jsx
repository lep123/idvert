import React from 'react'
import { connect } from 'react-redux'
import { home } from '@/actions/home'
import './index.less'

import WaterFall from '@@/WaterFall'

export default 
@connect((state) => ({
        tableData: state.index.Data
}), {
    home: home.setData
})class Fn extends React.Component{
    constructor (props) {
        super(props)
        // 拿第一次的数据
        this.props.home({token: localStorage.token})
      }
       
    
    render () {
        const {　result=[]　} = this.props.tableData
        console.log()
        return (
          <div className="pages_bottom">
              <WaterFall/>
          </div>
        )
      }
    }