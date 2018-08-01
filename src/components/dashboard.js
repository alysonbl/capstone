import React, { Component } from "react";

import TabNav from './tabnav';

class Dashboard extends Component {

    constrtuctor(props) {
        super(props)

        thsi.state = {
            tabs: [
                {
                    title: 'resipies',
                    active: false,
                    component: <h4>more stuff</h4>
                }
                
                {
                    title: 'rebuttle',
                    active: false,
                    component: <h4>stuff</h4>
                }
            ]
        }
    }
    render () {
        return (
            <div className='dashboard'>
                <TabNav tabs={this.state.tabs}/>
            </div>
        )
    
    }
}

export default Dashboard;