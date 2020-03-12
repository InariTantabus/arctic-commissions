import React, { Component } from 'react';

import { Description } from './description';

import history from '../history';

class DisplayItem extends Component {
  changePage() {
    if(document.getElementsByClassName('green-text')[0]) {
      document.getElementsByClassName('green-text')[0].classList.remove('green-text')
    }

    document.getElementsByClassName("navbar__dynamic__contact")[0].classList.add('green-text')
    history.push('/contact')
  }

  render() {
    return (
      <a className='display-item' onClick={() => this.changePage()}>
        <img className='display-item__image' src={this.props.imgLink} />
        <div className='display-item__title'>{this.props.title}</div>
        {Description(this.props.description)}
        <div className='display-item__price'>{`Price: $${this.props.price}`}</div>
      </a>
    );
  }
}

export default DisplayItem;