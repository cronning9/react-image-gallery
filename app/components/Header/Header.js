'use strict';

const React = require('react');

const LoginBox = require('./LoginBox');

const Header = () => {
  return (
    <header className='header'>
      <div id='title'><h1>PhoGallery</h1></div>
      <LoginBox />
    </header>
  )
}

module.exports = Header;