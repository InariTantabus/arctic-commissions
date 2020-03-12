import React, { Component } from 'react';

import history from '../history';

class Navbar extends Component {
  componentDidMount() {
    if (window.location.href.indexOf('/examples') > 0) {
      this.changePage('examples')
    } else if (window.location.href.indexOf('/contact') > 0) {
      this.changePage('contact')
    } else if (window.location.href.indexOf('/tos') > 0) {
      this.changePage('tos')
    } else if (window.location.href.indexOf('/') > 0 || window.location.href.indexOf('/commissions') > 0) {
      this.changePage('commissions')
    } 
  }

  changePage = page => {
    if(document.getElementsByClassName('green-text')[0]) {
      document.getElementsByClassName('green-text')[0].classList.remove('green-text')
    }

    if(page == 'commissions') {
      document.getElementsByClassName('navbar__dynamic__commissions')[0].classList.add('green-text')
    } else if(page == 'examples') {
      document.getElementsByClassName('navbar__dynamic__examples')[0].classList.add('green-text')
    } else if(page == 'contact') {
      document.getElementsByClassName('navbar__dynamic__contact')[0].classList.add('green-text')
    } else if(page == 'tos') {
      document.getElementsByClassName('navbar__dynamic__tos')[0].classList.add('green-text')
    }

    history.push(page)
  }

  render() {
    return (
      <div className='navbar'>
        <div className='navbar__static'>
          <div className='navbar__static__img'>
            <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02c4a2e6-87e6-4ef4-b390-972b366fe0fc/dds1t2j-8161974b-47d0-4031-869d-b921ea8263e8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyYzRhMmU2LTg3ZTYtNGVmNC1iMzkwLTk3MmIzNjZmZTBmY1wvZGRzMXQyai04MTYxOTc0Yi00N2QwLTQwMzEtODY5ZC1iOTIxZWE4MjYzZTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8_izDAl0sx_uBRUQY75TN-OWEX24nPJl-s2RjrF-QWQ' />
          </div>

          <a className='navbar__static__title' onClick={() => this.changePage('commissions')}>
            Arctic Soul
            <div className='logo-line1' />
            <div className='logo-line2' />
            <div className='logo-line3' />
          </a>
        </div>

        <div className='navbar__dynamic'>
          <a className={`green-text navbar__dynamic__commissions`} onClick={() => this.changePage('commissions')}>
            Commissions
          </a>

          <a className={`navbar__dynamic__examples`} onClick={() => this.changePage('examples')}>
            Examples
          </a>

          <a className={`navbar__dynamic__contact`} onClick={() => this.changePage('contact')}>
            Contact
          </a>
          
          <a className={`navbar__dynamic__tos`} onClick={() => this.changePage('tos')}>
            Terms of Service
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;