'use strict';

const React = require('react');
const Photo = require('./Photo')
const PhotoForm = require('./PhotoForm');

const PhotoGallery = ({photos, children}) => {
  let renderPhotos = photos.map((photo) => {
    return <Photo src={photo.url} caption={photo.caption} />
  });
  
  return (
    <div className='outer-container'>
      <div className='photo-gallery'>
        {renderPhotos}
      </div>
      <div className='photo-submit'>
        {children}
      </div>
    </div>
  )
}

PhotoGallery.propTypes = {
  photos: React.PropTypes.array
}

PhotoGallery.defaultProps = {
  photos: [
    {
      url: 'http://img.ifcdn.com/images/e609ef566958019007c0867bc34a3868fe4c8f9e82a6c38e17a8251d772ca555_3.jpg',
      caption: 'Recursion!'
    }
  ]
}

module.exports = PhotoGallery;