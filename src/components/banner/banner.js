import React from 'react';
import ButtonBlank from '../button/button-blank.js';
import ButtonFull from '../button/button-full.js'

class Banner extends React.Component{
    render(){
        return(
            <div id="hero" className="Banner" style={{backgroundImage: 'url(https://images.alphacoders.com/633/633643.jpg)'}}>
                <div className="content">
                    <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="" />
                    <h2>Season 2 now available</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.</p>
                    <div className="button-wrapper">
                    <ButtonBlank buttonText="Join Now"/>
                    <ButtonBlank buttonText="another text"/>
                    </div>
                </div>
                    <div className="overlay"></div>
            </div>
        );
    }
}

export default Banner;