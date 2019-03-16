import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../Components/header/header.js'
import Banner from '../Components/banner/banner.js'
import MovieThumbnailList from '../Components/MovieThumbnailList'
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
    this.props.getFeaturedMovies(this.categories)
  }
  render () {
    const { featuredMovies } = this.props
    const renderFeaturedMovies = featuredMovies.map(({ title, data}, index) => {
      return ( <MovieThumbnailList key={index} title={title} movieList={data} /> )
    })
    return (
      <div>
        <Header />
        <Banner />
        {/* <TitleList title="Top Rated Movies" url="movie/top_rated"/>
        <TitleList title="Now Playing" url="movie/now_playing"/>
        <TitleList title="Upcoming Movies" url="movie/upcoming"/>
        <TitleList title="Top Rated TV shows" url="tv/popular"/> */}
        {renderFeaturedMovies}
      </div>
    )
  }
}

Homepage.propTypes = {
  getFeaturedMovies: PropTypes.func,
  featuredMovies: PropTypes.array,
}

const mapStateToProps = (state) => {
  return {
    featuredMovies: state.homepage.featuredMovies
  }
}

const mapDispatchToProps = dispatch => ({
  getFeaturedMovies: (categories) => dispatch(getFeaturedMovies(categories))
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
