import React, { Component } from 'react';
import Header from './header';


class Layout extends Component {
    render() {
        return (
            <div>
            <div className='layout-grid'>
                <Header/>
            </div>
                {this.props.children}
        </div>
        )
    }
}

export default Layout
