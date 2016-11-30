/**
 * Created by Vijay on 11/17/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.js';
import Banner from './components/banner/banner.js';
import TitleList from './components/list/title-list.js';


const App = function(){
    return(
        <div>
            <Header />
            <Banner />
            <TitleList url="movie/top_rated"/>
        </div>

    );
}



ReactDOM.render(<App/>,document.getElementById("main-wrapper"))