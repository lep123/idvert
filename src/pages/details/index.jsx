import React from 'react'
import Card from '@/pages/card' 
import './style.less'
export default class extends React.Component{
    render() {
        const { query={} } = this.props.location
        return (
            <div className="pagescard1">
                <Card v={query} width={400}  />
            </div>
        )
    }
}