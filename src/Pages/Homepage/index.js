import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../../Components/header/header.js'
import Banner from '../../Components/banner/banner.js'
import MovieThumbnailList from '../../Components/MovieThumbnailList'
import { getFeaturedMovies, getTrendingMovies } from '../../Actions'
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
    this.props.getTrendingMovies()
    this.props.getFeaturedMovies(this.categories)
  }
  render () {
    const { featuredMovies, trendingMovies } = this.props
    const renderFeaturedMovies = featuredMovies.map(({ title, data}, index) => {
      return ( <MovieThumbnailList key={index} title={title} movieList={data} /> )
    })
    return (
      <div>
        <Header />
        <Banner trendingMovie={trendingMovies && trendingMovies[0]} />
        {renderFeaturedMovies}
      </div>
    )
  }
}

Homepage.propTypes = {
  getFeaturedMovies: PropTypes.func,
  getTrendingMovies: PropTypes.func,
  featuredMovies: PropTypes.array,
  trendingMovies: PropTypes.array,
}

Homepage.defaultProps = {
  featuredMovies: [],  
}

const mapStateToProps = (state) => {
  return {
    featuredMovies: state.homepage.featuredMovies.movies,
    trendingMovies: state.homepage.trendingMovies.movies,
  }
}

const mapDispatchToProps = dispatch => ({
  getFeaturedMovies: (categories) => dispatch(getFeaturedMovies(categories)),
  getTrendingMovies: () => dispatch(getTrendingMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
