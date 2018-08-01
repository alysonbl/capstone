import React, { Component } from "react";

import TabNav from './tabnav';

class Dashboard extends Component {

    constrtuctor(props) {
        super(props)

        thsi.state = {
            tabs: [
                {
                    title: 'resipies',
                    active: true,
                    component: <h4>more stuff</h4>
                },

                {
                    title: 'rebuttle',
                    active: false,
                    component: <h4>stuff</h4>
                }
            ]
        }
    }

    handelTabChange = (title) => {

    }
    render () {
        return (
            <div className='dashboard'>
                <TabNav handelTabChange={(title) => this.handelTabChange(title)} tabs={this.state.tabs}/>
            </div>
        )
    
    }
}

export default Dashboard;