import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import Header from './Components/header/header.js';
import Banner from './Components/banner/banner.js';
import TitleList from './Components/list/title-list.js';
import reducer from './Reducers'

const App = () => {
  let store = createStore(reducer, applyMiddleware(logger))
  store.dispatch({type:'ADD'})
  return (
    <Provider store = {store}>
      <div>
        <Header />
        <Banner />
        <TitleList title="Top Rated Movies" url="movie/top_rated"/>
        <TitleList title="Now Playing" url="movie/now_playing"/>
        <TitleList title="Upcoming Movies" url="movie/upcoming"/>
        <TitleList title="Top Rated TV shows" url="tv/popular"/>
      </div>
    </Provider>

  )
}



ReactDOM.render(<App/>,document.getElementById("main-wrapper"))
