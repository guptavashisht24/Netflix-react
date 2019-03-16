import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import reducer from './Reducers'

const App = () => {
  let store = createStore(reducer, applyMiddleware(thunk, logger))
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={Homepage}/>
      </Router>
    </Provider>
  )
}



ReactDOM.render(<App/>,document.getElementById("main-wrapper"))
