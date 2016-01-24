import React from 'react'
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome'


const ACTIVE = {
  color: 'red'
}
const NAVBAR = {
  background: '#fdf6e3',
  color: '#657b83',
  top: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '35px',
  padding: '0 20px'
}

const ICON = {
  color: '#657b83',
  cursor: 'pointer'
}

const Topbar = React.createClass({

  render() {
    return (
      <div style={NAVBAR}>
        <Link to="/settings" activeStyle={ACTIVE}>
          <FontAwesome name='gear' style={ICON} />
        </Link>
        <span>May 2015</span>
        <Link to="/edit" activeStyle={ACTIVE}>
          <FontAwesome name='plus' style={ICON} />
        </Link>
      </div>
    );
  }
});

module.exports = Topbar;
