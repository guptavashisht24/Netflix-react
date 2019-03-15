import React, { Component } from 'react'
import Header from '../Components/header/header.js'
import Banner from '../Components/banner/banner.js'
import TitleList from '../Components/list/title-list.js'

class Homepage extends Component {
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

export default Homepage
