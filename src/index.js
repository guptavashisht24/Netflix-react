import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Header from './Components/header/header.js';
import Banner from './Components/banner/banner.js';
import TitleList from './Components/list/title-list.js';
const App = () => {

  let store = createStore(() => {}, {})
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
