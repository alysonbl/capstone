import React, { Component } from 'react';

class TabNav extends Component {
    render () {
        return (
            <div className='tab-nav'>
            <div className='tab-nav__tabs'>
            {
                this.props.tabs.map((tab, index) => {
                    return <a classname='tab-nav__tab'>{tab.titel}</a>
                })
            }

                </div>
        
            </div>

        )
    }
}



export default TabNav;