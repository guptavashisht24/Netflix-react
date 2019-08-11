import React from 'react';

class Search extends React.Component{
    constructor(){
        super();
        this.state = {
            searchTerm:"",
            searchUrl:""
        };
    }

    handleChange(e){
        /*this.searchTerm({textBoxValue:e.target.value});*/
        this.setState({
            searchTerm:e.target.value,
        })
    }

    handleKeyUp(e){
        if(e.key==="Enter" && this.state.searchTerm!==""){ //check for when enter key and text field not emoty
            var searchUrl = "search/multi?query=" + this.state.searchTerm + "&api_key=" + this.apiKey;
            this.setState({searchUrl:searchUrl});
        }
    }

    render(){
        return (
                <input type="text" className="search" value={this.state.searchTerm} placeholder="Search for an item" onKeyUp={this.handleKeyUp.bind(this)} onChange={this.handleChange.bind(this)}/>
        );
    }
}

export default Search;
