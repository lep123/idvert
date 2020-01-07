import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import loader from '@/utils/loader'   // 路由懒加载

const Basic = loader(() => import('@/layouts/Basic'))
const Users = loader(() => import('@/layouts/Users'))
const Login = loader(() => import('@/pages/login'))
const Reg = loader(() => import('@/pages/reg'))
const Home = loader(() => import('@/pages/home'))
const FormNative = loader(() => import('@/pages/formNative'))
const FormAd = loader(() => import('@/pages/formAd'))
const List = loader(() => import('@/pages/list'))
const FaceBook = loader(() => import('@/pages/facebook'))
const Native = loader(() => import('@/pages/native'))
const routes = [
	{
		component: Users,
		path: '/users',
		routes: [
			{
				component: Login,
				path: '/users/login',
			},
			{
				component: Reg,
				path: '/users/reg',
			}
		]
	},
	{
		component: Basic,
		path: '/',
		routes: [
			{
				component: Home,
				path: '/',
				routes: [
					{
						component: FormNative,
						path: '/formNative',
					},
					{
						component: FormAd,
						path: '/formAd',
					},
					{
						component: List,
						path: '/',
						routes: [
							{
								component: Native,
								path: '/list/native',
							},
							{
								component: FaceBook,
								path: '/',
							},

						]
					}
				]
			}
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
