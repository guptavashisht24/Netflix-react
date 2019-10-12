import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Banner from '../../Components/Banner'
import MovieThumbnailList from '../../Components/MovieThumbnailList'
import Loader from '../../Components/Loader'
import { getFeaturedMovies, getTrendingMovies } from '../../Actions'
class Homepage extends Component {
  componentDidMount() {
    this.categories = [{
      title: "Top Rated Movies",
      url: "movie/top_rated",
    },
    // {
    //   title: "Now Playing",
    //   url: "movie/now_playing"
    // },
    // {
    //   title: "Upcoming Movies",
    //   url: "movie/upcoming"
    // },
    // {
    //   title: "Top Rated TV shows",
    //   url: "tv/popular",
    // }]
  ]
    this.props.getTrendingMovies()
    this.props.getFeaturedMovies(this.categories)
  }
  render () {
    const { featuredMovies: { movies=[], isLoading }, trendingMovies } = this.props
    const renderFeaturedMovies = movies && movies.map(({ title, data}, index) => {
      return ( <MovieThumbnailList key={index} title={title} movieList={data} /> )
    })
    if(isLoading)
      return <Loader />
    return (
      <div>
        <Header />
        <Banner trendingMovie={trendingMovies && trendingMovies[0]} />
        {renderFeaturedMovies}
        <Footer />
      </div>
    )
  }
}

Homepage.propTypes = {
  getFeaturedMovies: PropTypes.func,
  getTrendingMovies: PropTypes.func,
  featuredMovies: PropTypes.object,
  trendingMovies: PropTypes.array,
}

Homepage.defaultProps = {
  featuredMovies: {},
}

const mapStateToProps = (state) => {
  return {
    featuredMovies: state.homepage.featuredMovies,
    trendingMovies: state.homepage.trendingMovies.movies,
  }
}

const mapDispatchToProps = dispatch => ({
  getFeaturedMovies: (categories) => dispatch(getFeaturedMovies(categories)),
  getTrendingMovies: () => dispatch(getTrendingMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
