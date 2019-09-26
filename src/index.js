import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Homepage from './Pages/Homepage'
import MovieDetail from './Pages/MovieDetail'
import MoviePlayer from './Pages/MoviePlayer'

import reducer from './Reducers'

const App = () => {
  let store = createStore(reducer, applyMiddleware(thunk, logger))
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          {/* <Route exact path="/movie/:id" component={MovieDetail} /> */}
          <Route exact path="/play/:id" component={MoviePlayer} />
        </Switch>
      </Router>
    </Provider>
  )
}



ReactDOM.render(<App/>,document.getElementById("main-wrapper"))
