import React from 'react';

class Search extends React.Component{
    constructor(props){
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
            console.log("enter")
        }
    }

    componentDidMount(){
        if(this.props.url !==''){
            this.loadContent();
            this.setState({mounted:true});
        }
    }

    render(){
        return (
                <input type="text" className="Search" value={this.state.searchTerm} placeholder="Search for an item" onKeyUp={this.handleKeyUp.bind(this)} onChange={this.handleChange.bind(this)}/>
        );
    }
}

export default Search;