import React from 'react'

class TitleList extends React.Component{
    apiKey='e6ca854fb1aff4f3fb6b40ee8720f51e';

    constructor(props){
        super();
        this.state = {
            data: [],
            mounted:false
        };
    }

    componentDidMount(){
        if(this.props.url !==''){
            this.loadContent()
            this.setState(
                {mounted:true}
            );
        }
    }

    loadContent(){
        var requestUrl = 'https://api.themoviedb.org/3/' + this.props.url + '?api_key='+ this.apiKey
        fetch(requestUrl).then((response)=>{
            return response.json();
        }).then((data)=>{
            this.setState({
                data: data.results
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
    render(){
            var results = '';
            if(this.state.data){
                console.log("found state")
                results = this.state.data.map(function(results){
                    console.log(results.vote_average)
                })
            }



        return(
            <h1>highest Rated</h1>
        );
    }
}

export default TitleList;