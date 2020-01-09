import React from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import './style.less'

export default class extends React.PureComponent {
 
  render () {
    return (
      <div className="pages_list">
        <div className="pages_list_head">
          <NavLink 
            to="/" 
            activeClassName="activeLink" 
            exact
          >
            FaceBook
          </NavLink>
          <NavLink 
            to="/list/native" 
            activeClassName="activeLink"
            exact
          >
            Native
          </NavLink>
         
        </div>
        <div className="pages_list_body">
          {renderRoutes(this.props.route.routes)}
        </div>
      </div>
    )
  }
}