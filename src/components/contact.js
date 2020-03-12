import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <div className='contact__logo'>
          <div className='contact__logo__image'>
            <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02c4a2e6-87e6-4ef4-b390-972b366fe0fc/dds1t2j-8161974b-47d0-4031-869d-b921ea8263e8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyYzRhMmU2LTg3ZTYtNGVmNC1iMzkwLTk3MmIzNjZmZTBmY1wvZGRzMXQyai04MTYxOTc0Yi00N2QwLTQwMzEtODY5ZC1iOTIxZWE4MjYzZTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8_izDAl0sx_uBRUQY75TN-OWEX24nPJl-s2RjrF-QWQ' />
          </div>
          <div className='contact__logo__text'>
            Arctic Soul
            <div className=' logo-line1' />
            <div className=' logo-line2' />
            <div className=' logo-line3' />
          </div>
        </div>

        <div className='contact__line' />

        <div className='contact__email'>
          <i className='fas fa-envelope' />
          <div>ArcticComissions@outlook.com</div>
        </div>
        <div className='contact__discord'>
          <i className='fab fa-discord' />
          <div>Arctic Soul#6929</div>
        </div>

        <span className="dot"></span>
      </div>
    );
  }
}

export default Contact;