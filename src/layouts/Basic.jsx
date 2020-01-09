import React from 'react';
import { renderRoutes } from 'react-router-config'
import WithRouter from '@@/WithRouter'

export default class extends React.PureComponent {
	render() {
		return (  
			<div className='app'>
					{/* 全局路由守卫 */}
					<WithRouter routes={this.props.route.routes} />
			</div>
		)
	}
}
