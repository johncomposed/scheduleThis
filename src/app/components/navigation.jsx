var React = require('react');
var Bootstrap = require('react-bootstrap');

var Navbar = Bootstrap.Navbar;
var Nav = Bootstrap.Nav;
var NavItem = Bootstrap.NavItem;
var DropdownButton = Bootstrap.DropdownButton;
var MenuItem = Bootstrap.MenuItem;

var reactRouter = require('react-router');

var Router = reactRouter.Router;
var Route = reactRouter.Route;
var Link = reactRouter.Link;
var IndexRoute = reactRouter.IndexRoute;
var IndexLink = reactRouter.IndexLink;
var browserHistory = reactRouter.browserHistory;

var ACTIVE = { color: 'red' }

var Navigation = React.createClass({

  render: function() {
    return (
        <div>
          <ul>
            <li><Link      to="/"           activeStyle={ACTIVE}>/</Link></li>

            <li><Link      to="/about"      activeStyle={ACTIVE}>/about</Link></li>
          </ul>
        </div>
    );
  }
});

module.exports = Navigation;
