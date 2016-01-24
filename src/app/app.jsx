  import React from 'react'
  import ReactDOM from 'react-dom'
  import Main from './components/main.jsx'
  import All from './components/all.jsx'
  import Settings from './components/settings.jsx'
  import Edit from './components/edit.jsx'
  import Warning from './components/warning.jsx'
  import { Router, Route, Link, IndexRoute, IndexLink, hashHistory } from 'react-router'

  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={All}>
        <IndexRoute name="main" component={Main} />
        <Route name="settings" path="settings" component={Settings} />
        <Route name="edit" path="edit" component={Edit} />
        <Route name="warning" path="warning" component={Warning} />
      </Route>
  </Router>, document.body);
