import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { getMovieDetail } from '../../Actions'
import Header from '../../Components/header/header.js'
import  * as styles from './style'

class MovieDetail extends Component {
  componentDidMount() {
    const { id } =  this.props.match.params
    this.props.getMovieDetail(id)
  }
  render () {
    //console.log(this.props.movie)
    //return (<div></div>)
    const { original_title, overview, genres, vote_average, release_date, runtime } = this.props.movie
    const renderGenres = genres && genres.map((item, index) => (
      <li key={index}>{item.name}</li>
    ))
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col md={5}>
              a
              <Hello>asdas</Hello>
            </Col>
            <Col sm={7}>
              <div>{original_title}</div>
              <ul>{renderGenres}</ul>
            <div>{vote_average}</div>
              <div>{release_date}</div>
              <div>{runtime} minutes</div>
              <div>{overview}</div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

MovieDetail.propTypes = {
  getMovieDetail: PropTypes.func,
  movie: PropTypes.object,
}

const mapStateToProps = (state) =>  ({
  movie: state.movieDetail.data
})

const mapDispatchToProps = (dispatch) => ({
  getMovieDetail: (id) => dispatch(getMovieDetail(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)
