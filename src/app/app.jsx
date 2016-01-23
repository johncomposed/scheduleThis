(function() {
  var React = require('react'),
    ReactDOM = require('react-dom'),
    injectTapEventPlugin = require('react-tap-event-plugin'),
    Main = require('./components/main.jsx'),
    About = require('./components/about.jsx'),
    All = require('./components/all.jsx'),
    Task = require('./components/task.jsx'),
    Tasks = require('./components/tasks.jsx');

  var reactRouter = require('react-router');

  var Router = reactRouter.Router;
  var Route = reactRouter.Route;
  var Link = reactRouter.Link;
  var IndexRoute = reactRouter.IndexRoute;
  var IndexLink = reactRouter.IndexLink;
  var hashHistory = reactRouter.hashHistory;

  window.React = React;

  injectTapEventPlugin();

  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={All}>
        <IndexRoute name="main" component={Main} />
        <Route name="about" path="about" component={About} />
        <Route name="task" path="task" component={Tasks}>
          <Route path=":id" component={Task} />
        </Route>
      </Route>
  </Router>, document.body);

})();
