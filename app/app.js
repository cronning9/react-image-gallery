'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

const PhotoGallery = require('./components/PhotoGallery/PhotoGallery');
const Header = require('./components/Header/Header');

const data = require('./data/data');

require('./style/style.css');

ReactDOM.render(
  <div className='app'>
    <Header />
    <PhotoGallery photos={data} />
  </div>, document.getElementById('container')
)