import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../Components/header/header.js'
import Banner from '../Components/banner/banner.js'
import TitleList from '../Components/list/title-list.js'
import { getFeaturedMovies } from '../Actions'
class Homepage extends Component {
  componentDidMount() {
    this.props.getData()
  }
  render () {
    return (
      <div>
        <Header />
        <Banner />
        <TitleList title="Top Rated Movies" url="movie/top_rated"/>
        <TitleList title="Now Playing" url="movie/now_playing"/>
        <TitleList title="Upcoming Movies" url="movie/upcoming"/>
        <TitleList title="Top Rated TV shows" url="tv/popular"/>
      </div>
    )
  }
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getFeaturedMovies("movie/top_rated"))
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
