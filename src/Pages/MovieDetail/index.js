import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { getMovieDetail } from '../../Actions'
import Header from '../../Components/header/header.js'
import  { Grid, H2, Ul, Li, Description, Features, Label } from './style'

class MovieDetail extends Component {
  componentDidMount() {
    const { id } =  this.props.match.params
    this.props.getMovieDetail(id)
  }
  render () {
    const { adult, cast:movieCast, crew, poster_path, original_title, overview, genres, vote_average, release_date, runtime } = this.props.movie
    const renderGenres = genres && genres.map(({ name }, index) => (
      index < genres.length - 1 ? ` ${name}, ` : name
    ))
    const category = adult ? 'A' : 'U/A'
    const renderReleaseData = release_date && release_date.slice(0,4)
    const hour = Math.floor(runtime/60)
    const minutes = runtime%60
    const backgroundStyle = {
      backgroundImage: `url(http://image.tmdb.org/t/p/original${poster_path})`,
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      minHeight: '400px',
    }
    const renderCast = movieCast && movieCast.slice(0,5).map(({ name }, index) => {
      return index < 4 ? ` ${name}, ` : name
    })
    let renderDirector = []
    crew && crew.forEach(item => {
      if(item.job==="Director") {
        renderDirector.push(item.name)
      }
    })
    return (
      <div>
        <Header />
        <Grid>
          <Row>
            <Col md={5} style={backgroundStyle}>
            </Col>
            <Col sm={7}>
              <H2>{original_title}</H2>
              <Ul>
                <Li>{renderReleaseData}</Li>
                <Li>{hour}h {minutes}min</Li>
                <Li>{category}</Li>
              </Ul>
              <Description>{overview}</Description>
              <Features>
                <Label>Starring:</Label> {renderCast}
              </Features>
              <Features>
                <Label>Genres:</Label> {renderGenres}
              </Features>
              <Features>
                <Label>Created by:</Label> {renderDirector}
              </Features>
              <div>{vote_average}</div>
            </Col>
          </Row>
        </Grid>
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
