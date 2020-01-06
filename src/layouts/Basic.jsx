import React from 'react';
import { renderRoutes } from 'react-router-config'


export default class extends React.PureComponent {
    render() {
        return (
            <div className='app'>
                {renderRoutes(this.props.route.routes)}
                
            </div>
        )
    }
}
