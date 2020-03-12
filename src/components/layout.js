import React, { Component } from 'react';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        {this.props.components}
      </div>
    );
  }
}

export default Layout;