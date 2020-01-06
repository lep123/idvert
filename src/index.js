import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router'  // 路由
import { store } from './store'  //store
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'   //数据持久化
import { PersistGate } from 'redux-persist/lib/integration/react'
import 'antd/dist/antd.less'
import '@/styles/iconfont.css'
import './index.less'

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistStore(store)}>
			<Router />
		</PersistGate>
	</Provider>
, document.getElementById('root'))