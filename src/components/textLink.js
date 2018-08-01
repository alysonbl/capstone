inport React, { Component } from 'react';

importy { Link } from 'react-router-dom';

class TextLink extends component {
    render () {
        const { to, text } = this.props;

        return (
            <Link to={to} className='text-link'>
                {text}
            </Link>
        )
    }
}