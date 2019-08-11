import React from 'react'
import Logo from './logo.js'
import Search from './search.js'
import Navigation from './navigation.js'
import ButtonFull from '../Button/ButtonFull'

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="navigation-left">
        <Logo />
        <Navigation />
        </div>
        <div className="navigation-right">
          <Search />
          <ButtonFull buttonText="Sign Up"/>
        </div>
    </header>
)
}

export default Header;
