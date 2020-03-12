import React, { Component } from 'react';

class Tos extends Component {
  render() {
    return (
      <div className='tos'>
        <div className='tos__line-top'/>
        <div className='tos__content'>
          <div className='tos__content__title'>
            Terms of Service | Read through carefully before contacting me.
          </div>
          <ul className='tos__content__terms'>
            <li className='list-item'>SFW commissions only.</li>

            <li className='list-item'>I am allowed to cancel a commission at any point in the process.</li>
              <li className='list-item list-indent'>If a commission is cancelled in this way, you will be refunded in full.</li>

            <li className='list-item'>You are allowed to cancel a commission at any point in the process.</li>
              <li className='list-item list-indent'>If a commission is cancelled in this way, you will not be refunded.</li>

              <li className='list-item'>All prices listed are general values. The final price will be decided after we have agreed on what is being commissioned.</li>
              <li className='list-item list-indent'>Final prices will almost always be within $5 of listed price.</li>
                <li className='list-item list-indent2'>Unique commissions do not have a listed price. Unique prices will be determined by me based on what is being commissioned.</li>
              <li className='list-item list-indent'>When contacting me include the words o sief vji samit. This is used to check if you actually read through these rules.</li>
              <li className='list-item list-indent'>This price will be agreed upon before anything is drawn.</li>
              <li className='list-item list-indent'>Once a final price has been agreed upon, it can only change if we both agree on a new price.</li>

            <li className='list-item'>Throughout the process I will send update pictures to you for approval. these are your only chances to change things.</li>

            <li className='list-item'>Half of final price will be paid before anything is drawn.</li>
            <li className='list-item list-indent'>The second half will be paid before receiving final product.</li>

            <li className='list-item'>I will attempt to finish commissions within a week of receiving first payment. Rarely it may take longer.</li>

            <li className='list-item'>Payment via Paypal, unless other payment method is agreed upon.</li>
          </ul>
        </div>
        <div className='tos__line-bottom'/>
      </div>
    );
  }
}

export default Tos;