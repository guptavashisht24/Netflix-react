import React from 'react'
import Item from "./title-list-item.js"

class TitleList extends React.Component{
    constructor(props){
        super()
        this.state = {
            data: [],
            mounted:false
        };
        this.apiKey='e6ca854fb1aff4f3fb6b40ee8720f51e'
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
                results = this.state.data.map(function(videoDetail,i){
                    var backDrop;
                    var name;
                    var description;
                    var rating;
                    if(i<5){
                        backDrop = 'http://image.tmdb.org/t/p/original' + videoDetail.backdrop_path;
                        description = videoDetail.overview;
                        rating = videoDetail.vote_average
                        if(!videoDetail.name){
                            name = videoDetail.original_title
                        }
                        else if(videoDetail.title){
                            name = videoDetail.title
                        }
                        else{
                            name = videoDetail.name;
                        }
                        return <Item key={results.id} title = {name} plot = {description} backDrop = {backDrop} rating = {rating}/>
                    }
                    return <div key={results.id}></div>
                })
            }



        return(
            <div className="TitleList">
                <div className="Title">
                    <h2>{this.props.title}</h2>
                    <div className="titles-wrapper">
                        {results}
                    </div>
                </div>
            </div>
        );
    }
}

export default TitleList;
