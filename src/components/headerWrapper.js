import React, { Component } from 'react';

class HeaderWrapper extends Component {
    render () {
        return (
    <div>
        <div className='header'>
            <h1 className='header__title'>ihatecilantro.com Rebuttle! muahahahaha</h1>
            <p className='header__subtitle'>Why 'ihatecilantro.com' is wrong.</p>
            {this.props.children}
            </div>
    </div>
        )
    }
}

export default HeaderWrapper;