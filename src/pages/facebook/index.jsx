import React from 'react'
import './style.less'
import FormPanel from '@@/Filter/FormPanel'
import Filter from '@@/Filter'
import { home } from '@/actions/home' 
import { connect } from 'react-redux'
export default 
@connect( state => ({
  data: state.index.localData
}), {
  getLocalData: home.localData
})
class extends React.PureComponent {
  componentDidMount () {
    this.props.getLocalData()
  }

  onChange = (options) => {
    console.log(options)
  }
  render () {
    const { data } = this.props
    return (
      <div className="pages_facebook">
          <Filter data={data} onChange={this.onChange}/>
      </div>
    )
  }
}