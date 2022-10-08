// import dependencies
import React from 'react';
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        // global navigation menu
        <nav className="App-nav">
            <Link to="/">Home</Link>
            <Link to="../stores">Stores</Link>
            <Link to="../order">Order</Link>
        </nav>
    );
}

export default Navigation;