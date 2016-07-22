'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const PhotoGallery = require('./components/PhotoGallery/PhotoGallery');
const data = require('./data/data');

require('./style/style.css');

ReactDOM.render(
  <PhotoGallery photos={data} />, document.getElementById('container')
)