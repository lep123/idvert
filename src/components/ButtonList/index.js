import React from 'react'
import cs from 'classnames'
import './styles.less'

export default class extends React.PureComponent {
  state = {
    data: this.props.data
  }
  onClick = (options) => {
    const { handelClcik } = this.props
    const { data } = this.state
    const children = data.children.map( v => {
      if(v.id == options.id){
        v.active = true
      } else {
        v.active = false
      }
      return v
    })

    this.setState({
      data: {...data, children}
    })
    
    handelClcik(options)
  }
  render () {
    const { style = {} } = this.props
    const { data } = this.state
   
    return (
      <div style={style} className="comm_button_list">
        <span>{data.title}:</span>
        {
          data.children.map( v => (
            <button 
              key={v.id} 
              className={cs('button', { active: v.active })}
              onClick = {() => this.onClick(v)}
            >
              {v.context}
            </button>
          ))
        }
       
      </div>
    )
  }
}