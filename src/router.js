import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import loader from '@/utils/loader'   // 路由懒加载

const Basic = loader(() => import('@/layouts/Basic'))
const Users = loader(() => import('@/layouts/Users'))


const routes = [
	{
		component: Users,
		path: '/users',
	},
	{
		component: Basic,
		path: '/',
		routes: [
			
		]
	}
]

export default class extends React.PureComponent {
	render () {
		return(
			<BrowserRouter >
					{renderRoutes(routes)}
			</BrowserRouter>
		)
	}
}
