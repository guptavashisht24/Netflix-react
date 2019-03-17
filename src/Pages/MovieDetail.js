import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMovieDetail } from '../Actions'

class MovieDetail extends Component {
  componentDidMount() {
    this.props.getMovieDetail(123)
  }
  render () {
    return (
      <div>
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
