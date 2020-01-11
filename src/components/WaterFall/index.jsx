import React from 'react'
import { connect } from 'react-redux'
import { home } from '@/actions/home'
import Masonry from 'masonry-layout'
import InfiniteScroll from 'react-infinite-scroller'
import './index.less'

const arr = ['123456789','123456789','123456789','123456789','123456789','123456789','123456789','123456789','123456789','123456789','123456789','123456789']

export default 
@connect((state) => ({
        tableData: state.index.Data
}), {
    home: home.setData
})class Fn extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
          hasMore: true, // 是否开启下拉加载
          datas: [], // 接受我每次的数据
          count: 0,
        }
        // 拿第一次的数据
        this.props.home({token: localStorage.token})
      }
        componentDidMount(){
            this.loadMoreData()
        }
      advanceWidth = () => {
        // new Masonry(节点, 配置)
        new Masonry(document.querySelector('.pages-hoc'), {
          itemSelector: '.d', // 要布局的网格元素
          columnWidth: 100,  // 获取节点 可以自动计算每列的宽度
          fitWidth: true, // 设置网格容器宽度等于网格宽度
          gutter: 20,
        })
      }

      loadMoreData = () => {
        // page 当前滚动到了第几页
        const { data, count } = this.state
        // 超过200条数据 不继续监听下拉事件
        if (count && data.length >= count) {
        return false
        }
        this.advanceWidth()
      }
    render () {
        const { hasMore } = this.state
        const {　result=[]　} = this.props.tableData
        console.log()
        return (
          <>
            <InfiniteScroll
              initialLoad={false} // 不让它进入直接加载
              pageStart={1} // 设置初始化请求的页数
              loadMore={this.loadMoreData}  // 监听的ajax请求
              hasMore={hasMore} // 是否继续监听滚动事件 true 监听 | false 不再监听
              useWindow={false} // 不监听 window 滚动条
            >
              <div className="pages-hoc">
                {
                    arr.map((v,k) => (
                        <div 
                            key={k} 
                            className="d"
                        >
                            <header>
                                
                            </header>
                        </div>
                    ))
                }
               
              </div>
            </InfiniteScroll>
          </>
        )
      }
    }