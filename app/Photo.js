const React = require('react');

class Photo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false
    }
    this.toggleLiked = this.toggleLiked.bind(this);
    this.classes = 'like-button'
  }

  render() { 
    return (<div className="photo">
              <h3>{this.props.caption}</h3>
              <img src={this.props.src} />
              <div onClick={this.toggleLiked} className={this.classes} ></div>
            </div>
      )
  }

  // Though onClick catches every click, state doesn't change on the first click of the
  // div. Need to determine why. After the first click, it works as normal.
  toggleLiked(event) {
    event.preventDefault();
    console.log('clicked');
    this.setState({ liked: !this.state.liked });
    this.state.liked ? this.classes += ' liked' : this.classes = 'like-button';
  }
}

module.exports = Photo;