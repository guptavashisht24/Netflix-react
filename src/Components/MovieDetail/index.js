import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import YouTube from 'react-youtube'
import { Row, Col, Tabs, Tab, Button } from 'react-bootstrap'
import { getMovieDetail, getSimilarMovie, getMovieTrailer } from '../../Actions'
import Header from '../../Components/Header'
import  { Grid, Image, Heading, List, TabbedNavigation, RatingWrapper, Rating, Description, Features, Label } from './style'

class MovieDetail extends Component {
  constructor () {
    super()
    this.state = { key: 'overview', currentVideoId: ''}
  }
  componentDidMount() {
    const { match, getMovieDetail, getSimilarMovie } = this.props
    //this.movieId = match.params.id
    this.movieId = this.props.movieId
    getMovieDetail(this.movieId)
    getSimilarMovie(this.movieId)
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    //console.log("tnextProps",nextProps)
    //console.log("UNSAFE_componentWillReceiveProps called",nextProps)
    if(nextProps.movieTrailers !== this.props.movieTrailers) {
      //this.setState({currentVideoId:nextProps.movieTrailers[0].key})
      // console.log("this.props.movieTrailers",this.props)
    }
    //console.log(this.state)
  }
  handleTabSelect = (key) => {
    if(key==='trailer' && !this.props.movieTrailers.length >= 1 ) {
      this.props.getMovieTrailer(this.movieId)
    }
    this.setState({ key })
  }
  handlePreviousVideo = () => {

  }
  handleNextVideo = () => {

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
    const youtubePlayerConfig = {
      height: '390',
      width: '640',
      // playerVars: { // https://developers.google.com/youtube/player_parameters
      //   autoplay: 1
      // }
    }
    //console.log(this.props.movieTrailers,"render")
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
              <TabbedNavigation>
                <Tabs id="controlled-tab-example" activeKey={this.state.key} onSelect={key => this.handleTabSelect(key)}>
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
                    <Button onClick={this.handlePreviousVideo}>Previous Trailer</Button>
                    <Button onClick={this.handleNextVideo}>Next Trailer</Button>
                    <YouTube
                      videoId="2g811Eo7K8U"
                      opts={youtubePlayerConfig}
                    />
                  </Tab>
                  <Tab eventKey="more" title="More like this">
                    More like this
                  </Tab>
                  <Tab eventKey="details" title="Details">
                    Details
                  </Tab>
                </Tabs>
              </TabbedNavigation>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

MovieDetail.propTypes = {
  getMovieDetail: PropTypes.func,
  getMovieTrailer: PropTypes.func,
  getSimilarMovie: PropTypes.func,
  match: PropTypes.object,
  movie: PropTypes.object,
  movieTrailers: PropTypes.array,
}

const mapStateToProps = (state) =>  ({
  movie: state.movieDetail.data,
  movieTrailers: state.movieDetail.movieTrailers.data,
})

const mapDispatchToProps = (dispatch) => ({
  getMovieDetail: (id) => dispatch(getMovieDetail(id)),
  getMovieTrailer: (id) => dispatch(getMovieTrailer(id)),
  getSimilarMovie: (id) => dispatch(getSimilarMovie(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)
