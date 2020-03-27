import React, { Component } from 'react';

import axios from 'axios';

class Examples extends Component {
  constructor() {
    super();
    
    this.state = {
      active: 0,
      examples: []
    }

    this.setActive = this.setActive.bind(this);
    this.changeActive = this.changeActive.bind(this);
    this.getExampleItems = this.getExampleItems.bind(this);
    this.isHidden = this.isHidden.bind(this);
  }

  componentDidMount() {
    this.getExampleItems()
  }

  setActive(image) {
    this.setState({
      active: image
    })
  }

  changeActive(modifier) {
    var newActive = 0;
    if(modifier == '+') {
      if(this.state.active != this.state.examples.length - 1) {
        newActive = this.state.active + 1
      } else {
        newActive = this.state.active;
      }
    } else if(modifier == '-') {
      if(this.state.active != 0) {
        newActive = this.state.active - 1
      } else {
        newActive = this.state.active;
      }
    }
    
    this.setState({
      active: newActive
    })
  }

  getExampleItems() {
    axios
      .get('https://arcticsoul.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        this.setState({
          examples: response.data.portfolio_items
        });
        console.log(this.state.examples);
      })
      .catch(error => {
        console.log(error);
      })
  }

  isHidden(index) {
    if (index == this.state.active || index == this.state.active + 1 || index ==  this.state.active + 2 || index == this.state.active - 1 || index == this.state.active - 2) {
      return ''
    } else if ((this.state.active == 0 && index == 3) || (this.state.active == 0 && index == 4)) {
      return ''
    } else if (this.state.active == 1 && index == 4) {
      return ''
    } else if (this.state.active == this.state.examples.length - 2 && index == this.state.active - 3) {
      return ''
    } else if ((this.state.active == this.state.examples.length - 1 && index == this.state.active - 3) || (this.state.active == this.state.examples.length - 1 && index == this.state.active - 4)) {
      return ''
    } else {
      console.log(index, 'is hidden');
      return 'hidden'
    }
  }

  render() {
    return (
      <div className='examples'>
        <div className='examples__container'>
          <a onClick={() => this.changeActive('-')}>
            <i className='fas fa-arrow-circle-up' />
          </a>


          {
            this.state.examples.map((example, index) => {
              return (
                <a
                  key={example.id}
                  onClick={() => this.setActive(index)}
                  className={`
                    ${this.isHidden(index)}
                    ${this.state.active == index ? 'active' : ''}
                    examples__container__image
                  `}
                >
                  <img src={`${example.thumb_image_url}`} />
                </a>
              )
            })
          }


          <a onClick={() => this.changeActive('+')}>
            <i className='fas fa-arrow-circle-down' />
          </a>
          
          <div>{this.state.active + 1} / {this.state.examples.length}</div>
        </div>


        <div className='examples__showcase'>
          {
            this.state.examples.map((example, index) => {
              return (
                <div key={example.id} className={`${this.state.active == index ? '' : 'hidden'} examples__showcase__image`}>
                  <img src={`${example.thumb_image_url}`} />
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Examples;