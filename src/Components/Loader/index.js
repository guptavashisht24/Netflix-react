import React, { Component } from 'react'
import './styles.css'
class Loader extends Component {
  render() {
    return (
      <div className="logo-wrapper">
        <div className="">
          <div className="netflix">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h3>Netflix</h3>
        </div>
      </div>
    )
  }
}

export default Loader
