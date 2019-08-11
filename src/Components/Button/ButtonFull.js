import PropTypes from 'prop-types'
import React from 'react';

function ButtonFull(props){
  return(
    <a href="#" className="button button-full">{props.buttonText}</a>
  )
}
ButtonFull.propTypes = {
  buttonText: PropTypes.string.isRequired,
}
export default ButtonFull;
