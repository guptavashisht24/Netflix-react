import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMovieDetail } from '../Actions'
import Header from '../Components/header/header.js'
class MovieDetail extends Component {
  componentDidMount() {
    const { id } =  this.props.match.params
    this.props.getMovieDetail(id)
  }
  render () {
    return (
      <div>
        <Header />
        movie detail
      </div>
    )
  }
}

MovieDetail.propTypes = {
  getMovieDetail: PropTypes.func,
}

const mapStateToProps = () =>  ({

})

const mapDispatchToProps = (dispatch) => ({
  getMovieDetail: (id) => dispatch(getMovieDetail(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)
