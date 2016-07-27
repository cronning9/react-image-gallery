'use strict';

const React = require('react');

const Header = ({children}) => {
  return (
    <header className='header'>
      <div id='title'><h1>PhoGallery</h1></div>
      {children}
    </header>
  )
}

module.exports = Header;