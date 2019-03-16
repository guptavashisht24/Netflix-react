import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../Components/header/header.js'
import Banner from '../Components/banner/banner.js'
import TitleList from '../Components/list/title-list.js'
import { getFeaturedMovies } from '../Actions'
class Homepage extends Component {
  componentDidMount() {
    this.categories = [{
      title: "Top Rated Movies",
      url: "movie/top_rated",
    },
    {
      title: "Now Playing",
      url: "movie/now_playing"
    },
    {
      title: "Upcoming Movies",
      url: "movie/upcoming"
    },
    {
      title: "Top Rated TV shows",
      url: "tv/popular",
    }]
    this.categories.forEach(({ title, url }) => {
      this.props.getFeaturedMovies(title, url)
    })
  }
  render () {
    return (
      <div>
        <Header />
        <Banner />
        {/* <TitleList title="Top Rated Movies" url="movie/top_rated"/>
        <TitleList title="Now Playing" url="movie/now_playing"/>
        <TitleList title="Upcoming Movies" url="movie/upcoming"/>
        <TitleList title="Top Rated TV shows" url="tv/popular"/> */}
      </div>
    )
  }
}

Homepage.propTypes = {
  getFeaturedMovies: PropTypes.func,
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch => ({
  getFeaturedMovies: (title, url) => dispatch(getFeaturedMovies(title, url))
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
