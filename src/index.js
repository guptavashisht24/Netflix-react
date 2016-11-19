/**
 * Created by Vijay on 11/17/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/header/header.js';
import Logo from './components/header/logo.js';
import Search from './components/header/search.js';
import Banner from './components/banner/banner.js';

const App = function(){
    return(
        <div>
            <Logo />
            <Navigation />
            <Search />
            <Banner />
        </div>
    );
}
ReactDOM.render(<App/>,document.getElementById("main-wrapper"))