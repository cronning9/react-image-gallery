# react-image-gallery

A toy app for me to learn React. This gallery dynamically adds images that you link 
via the form. 

To start, clone the repo and run `npm install`. As specified in `package.json`'s `postinstall` script,
this compiles everything for production. From here, you can start the Express server with node index.js,
nodemon, or whatever method you like. 

If you'd like to run in development, running `npm start` will spin up a webpack-dev-server. By default, the app is run through localhost:8080. 

There's only one Express route to make the whole app run at this point. I'll figure out more things later.

### Current Issues

- Image urls are stored locally in the client. IRL, would 
make an ajax request and send it to a server.   
- Need to import Twitter-Bootstrap for style purposes. 
