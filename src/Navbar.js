import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div style={{ fontSize: '20px' }}>
        <Link to="/" style={{ marginRight: '30px' }}>
          Home
        </Link>
        <Link style={{ marginRight: '30px' }} to="/about">
          About
        </Link>
        <Link to="/user/james">User </Link>
      </div>
    );
  }
}
