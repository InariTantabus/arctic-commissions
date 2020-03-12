import React, { Component } from 'react';

import Navbar from './navbar';
import Layout from './layout';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <div className='layout'>
          {this.props.children}
        </div>
      </div>
    );
  }
}