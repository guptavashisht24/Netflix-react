/**
 * Created by Vijay on 11/17/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.js';
import Banner from './components/banner/banner.js';


const App = function(){
    return(
        <div>
            <Header />
            <Banner />
            <Search/>
        </div>

    );
}

class Search extends React.Component{
    constructor(props){
        super();
        this.state = {
            searchTerm:"",
            searchUrl:""
        };
    }

    handleChange(e){
        this.searchTerm({textBoxValue:e.target.value});
    }
    render(){
        return (
            <div>
                <input type="text" value={this.state.searchTerm} placeholder="Search for an item" onChange={this.handleChange.bind(this)}/>
             </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById("main-wrapper"))