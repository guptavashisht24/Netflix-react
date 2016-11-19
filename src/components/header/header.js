/**
 * Created by Vijay on 11/17/16.
 */
import React from 'react';
import Logo from './logo.js';
import Search from './search.js';
import Navigation from './navigation.js';
// Navigation
function Header(){
    return (
        <header className="Header">
            <Logo />
            <Navigation />
            <Search />
        </header>
);
}

export default Header;
