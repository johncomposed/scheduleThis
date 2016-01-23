  import React from 'react'
  import ReactDOM from 'react-dom'
  var injectTapEventPlugin = require('react-tap-event-plugin'),
    Main = require('./components/main.jsx');

  //Needed for React Developer Tools
  window.React = React;

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  // Render the main app react component into the document body.
  // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
  ReactDOM.render(<div>"hi"<Main/></div>, document.body);
