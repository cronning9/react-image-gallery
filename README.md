# react-image-gallery

A toy app for me to learn React. This gallery dynamically adds images that you link 
via the form. 

This runs with webpack-dev-server, as it's not intended to be a full stack application.

To start, clone the repo and run `npm install`. Everything important is in the package.json.

Running `npm start` will spin up a webpack-dev-server. By default, the app is run through localhost:8080. 
### Current Issues

- Though 'onClick' events on the Photo component's `like-button` div registers
each click, the declared state change does not occur until
the second click. 
- Image urls are stored locally in the client. IRL, would 
make an ajax request and send it to a server.   