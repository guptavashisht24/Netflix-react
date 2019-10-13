import React from 'react';

class Search extends React.Component{
    constructor(){
        super();
        this.state = {
            searchTerm:"",
            searchUrl:""
        };
    }

    handleChange = (e) => {
        this.setState({
            searchTerm:e.target.value,
        })
    }

    debounceCalling = (fn, timeQuantum) => {
      return (args)=>{
        this.called = this.calledBefore;
        this.calledBefore = Date.now(); //
        if(this.called === undefined || this.calledBefore - this.called > timeQuantum){
          fn(args);
        }
      }
    }



    handleKeyUp = () => {
        if(this.state.searchTerm!==""){ //check for when enter key and text field not emoty
            var searchUrl = "search/multi?query=" + this.state.searchTerm + "&api_key=" + this.apiKey;
            this.setState({searchUrl:searchUrl});
        }
    }



    render(){

        const searchFetch = this.debounceCalling(this.handleKeyUp, 2000)
        return (
                <input type="text" className="search" value={this.state.searchTerm} placeholder="Search for an item" onKeyUp={searchFetch} onChange={this.handleChange}/>
        );
    }
}

export default Search;
