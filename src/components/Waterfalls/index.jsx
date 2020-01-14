import React, { Component } from 'react'
import Masonry from 'masonry-layout'//瀑布流
import InfiniteScroll from 'react-infinite-scroller' //下拉滚动
import imagesLoaded from 'imagesloaded'
import _ from 'loadsh'
import { Spin, Icon } from 'antd';
import { requestPost } from '@/utils/request'
import { withRouter } from 'react-router-dom'
import defaultImg from './1.gif'
import Card from '@/pages/card'
import './style.less'

export default
@withRouter
class extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			pages: 1,
			count: '',
		}
		this.loadFunc()
	}
	loadFunc = (page = 1) => {
		const { data, count } = this.state
		if (count && data.length >= count) {
			return false
		}
		requestPost('/api/Home/Apis/sampleList', { page, limit: 10 })
			.then(res => {
				this.setState({
					data: [...data, ...res.result.list],
					count: res.count,
				}, () => {
					this.images()
				})
			})
			.catch(err => console.log(err))
	}
	advanceWidth = () => {
		new Masonry(document.querySelector('.pages-hoc'), {
			itemSelector: '.d',
			fitWidth: true,
			columnWidth: '.d',
			gutter: 20,
		})
	}
	images = () => {
		//获取需要加瀑布流的DOM事件
		const el = imagesLoaded('.pages-hoc')
		el.on('always', () => {
			this.advanceWidth()
			//全部加载完成
			console.log('图片已全部加载，或被确认加载失败');
		})
	}
	onError = e => {
		e.target.setAttribute('src', defaultImg)
	}
	details = (e) => {
		console.log(e)
		this.props.history.push({pathname:'/details',query:e})
		// this.props.history.push('/details')
	}
	render() {
		return (
			<div className="waterfalls" style={{ height: '300px', overflow: 'auto' }} >
				<InfiniteScroll
					initialLoad={false} // 不让它进入直接加载
					pageStart={1} // 设置初始化请求的页数
					loadMore={this.loadFunc}  // 监听的ajax请求
					hasMore={true} // 是否继续监听滚动事件 true 监听 | false 不再监听
					useWindow={false} // 不监听 window 滚动条
					className="imgs"
					loader={<Spin key={0} />}
				>
					<div className="pages-hoc" style={{ margin: '0 auto' }} >
						{
							this.state.data.map((v, key) => (
								<div key={key} onClick={() => {this.details(v)}} width='200'>
									<Card v={v}  width={200} />
								</div>
								//  <Card key={key} v={v} onClick={() => {this.details(v)}} />
								// <div key={key} className="d pages-water" onClick={() => {this.details(v)}}>
								// 	<div className="imgbox">
								// 		<p className="water-static">{_.get(JSON.parse(v.info), 'cod', '')}</p>
								// 		<img src={_.get(JSON.parse(v.info), 'imgurl', '')} onError={this.onError} style={{ width: 200, height: 'auto' }} />
								// 		{
								// 			// console.log(_.get(JSON.parse(v.info), 'imgType', ''))
								// 			_.get(JSON.parse(v.info), 'imgType', '') == 'static' ?
								// 				null
								// 				: _.get(JSON.parse(v.info), 'imgType', '') == 'video' ?
								// 					<p className="imgtype"><Icon type="play-circle" /></p>
								// 					: <p className="imgcarousel">· · ·</p>
								// 		}
								// 	</div>
								// 	<p>{_.get(JSON.parse(v.info), 'title', '')}</p>
								// 	<div className="icon">
								// 		<p className="iconinfo">
								// 			<Icon type="clock-circle" />22
								// 		</p>
								// 		<p className="iconinfo">
								// 			<Icon type="mobile" />21
								// 		</p>
								// 		<p className="iconinfo">
								// 			<Icon type="dribbble-square" />23
								// 		</p>
								// 		<p className="iconinfo">
								// 			<Icon type="team" />95
								// 		</p>
								// 		<p className="iconinfo">
								// 		</p>
								// 	</div>
								// 	<p><Icon type="eye" />{_.get(JSON.parse(v.info), 'date', '')}</p>
								// 	<p className="domain">{_.get(JSON.parse(v.info), 'website', '')}</p>
								// </div>
							))
						}
					</div>
				</InfiniteScroll>
			</div>
		)
	}
}