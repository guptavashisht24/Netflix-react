import PropTypes from 'prop-types'
import React from 'react'

function ButtonBlank(props){
  return(
    <a href="#" className="button">{props.buttonText}</a>
  )
}

ButtonBlank.propTypes = {
  buttonText: PropTypes.string.isRequired,
}
export default ButtonBlank;
