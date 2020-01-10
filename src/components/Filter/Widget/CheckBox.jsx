import React from 'react'
import cs from 'classnames'
import '../style.less'
export default class extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = { 
      disabled: props.disabled || false ,
      data: this.props.data
    }
  }
  componentWillReceiveProps (nextProps) {
    const { disabled } = this.state
    if(disabled != nextProps.disabled) {
      this.setState({ 
        disabled: nextProps.disabled,
      }) 
    }
  }
  onClick = (options) => {
    const { onClick, disabled } = this.props
    const { data } = this.state
    if(disabled){
      return false
    } else {
      const arr = data.map( v => {
        if(v.id == options.id){
          v.active = !v.active
        } 
        return v
      })
  
      this.setState({
        data: arr
      })
      onClick && onClick(options)
    }
  }
  render () {
    const { disabled, data  } = this.state
   
    return (
      <div className="comm_filter_checkbox">
        {
          data && data.map(v => (
              <span 
                onClick={() => this.onClick(v)} 
                key={v.id}
                className={cs({ 
                  'checkbox_disabled': disabled, 
                  'checkbox_active': v.active, 
                })}
              >
                {v.value}
              </span>
            ))
        }
      </div>
    )
  }
}