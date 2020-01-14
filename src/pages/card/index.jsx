import React from 'react'
import _ from 'loadsh'
import { Spin, Icon } from 'antd';
import './style.less'
export default class extends React.Component {
	render() {
		const { v } = this.props
		const {width} = this.props
		console.log(width)
		return (
			<div className="d pages-water pagescard" style={{width,marginTop:15}}>
				<div className="imgbox" style={{position:'relative'}}>
					<p className="water-static">{_.get(JSON.parse(v.info), 'cod', '')}</p>
					<img src={_.get(JSON.parse(v.info), 'imgurl', '')} onError={this.onError} style={{ width, height: 'auto', }} />
					{
						_.get(JSON.parse(v.info), 'imgType', '') == 'static' ?
							null
						: _.get(JSON.parse(v.info), 'imgType', '') == 'video' ?
							<Icon type="play-circle" className="imgtype" />
						: <p className="imgcarousel">· · ·</p>
					}
				</div>
				<p>{_.get(JSON.parse(v.info), 'title', '')}</p>
				<div className="icon">
					<p className="iconinfo">
						<Icon type="clock-circle" />22
          </p>
					<p className="iconinfo">
						<Icon type="mobile" />21
          </p>
					<p className="iconinfo">
						<Icon type="dribbble-square" />23
          </p>
					<p className="iconinfo">
						<Icon type="team" />95
          </p>
					<p className="iconinfo">
					</p>
				</div>
				<p><Icon type="eye" />{_.get(JSON.parse(v.info), 'date', '')}</p>
				<p className="domain">{_.get(JSON.parse(v.info), 'website', '')}</p>
			</div>
		)
	}
}