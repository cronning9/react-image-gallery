# react-image-gallery

A toy app for me to learn React. This gallery dynamically adds images that you link 
via the form. 

This runs with webpack-dev-server, as it's not intended to be a full stack application.

### Current Issues

- Though 'onClick' events on the Photo component's `like-button` div registers
each click, the declared state change does not occur until
the second click. 
- Image urls are stored locally in the client. IRL, would 
make an ajax request and send it to a server.   