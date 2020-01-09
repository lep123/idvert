import React from 'react';
import { renderRoutes } from 'react-router-config'
import './layouts.less'
import imgs from '@/assets/logo.png'
export default class extends React.PureComponent {
	render() {
		return (
			<div className='layoputs_users'>
				<img src={imgs} alt="" className="layput_users_logo"/>
			  <div className="layoputs_users_box">
					{renderRoutes(this.props.route.routes)}
				</div>
			</div>
		)
	}
}
