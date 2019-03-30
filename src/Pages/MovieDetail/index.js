import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Tabs, Tab } from 'react-bootstrap'
import { getMovieDetail, getSimilarMovie } from '../../Actions'
import Header from '../../Components/header/header.js'
import  { Grid, Image, Heading, List, RatingWrapper, Rating, Description, Features, Label } from './style'

class MovieDetail extends Component {
  constructor () {
    super()
    this.state = { key: 'overview'}
  }
  componentDidMount() {
    const { id } =  this.props.match.params
    this.props.getMovieDetail(id)
    this.props.getSimilarMovie(id)
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
            <Col md={4}>
              <Image className="img-responsive" src={`http://image.tmdb.org/t/p/original${poster_path}`} alt={original_title} />
            </Col>
            <Col sm={8}>
              <Heading>{original_title}</Heading>
              <RatingWrapper>
                <Rating />{vote_average}
              </RatingWrapper>
              <Tabs id="controlled-tab-example" activeKey={this.state.key} onSelect={key => this.setState({ key })}>
                <Tab eventKey="overview" title="Overview">
                  <List>
                    <li>{renderReleaseData}</li>
                    <li>{hour}h {minutes}min</li>
                    <li>{category}</li>
                  </List>
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
                </Tab>
                <Tab eventKey="trailer" title="Trailers & more">
                  Trailers & more
                </Tab>
                <Tab eventKey="more" title="More like this">
                  More like this
                </Tab>
                <Tab eventKey="details" title="Details">
                  Details
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

MovieDetail.propTypes = {
  getMovieDetail: PropTypes.func,
  getSimilarMovie: PropTypes.func,
  match: PropTypes.object,
  movie: PropTypes.object,
}

const mapStateToProps = (state) =>  ({
  movie: state.movieDetail.data
})

const mapDispatchToProps = (dispatch) => ({
  getMovieDetail: (id) => dispatch(getMovieDetail(id)),
  getSimilarMovie: (id) => dispatch(getSimilarMovie(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)
