import React from 'react';

export function Description (inputList) {
  return (
    <ul className='display-item__descriptions'>
      {
        Object.values(inputList).map((item, index) => {
          return (
            <li key={index} className='display-item__description'>{item}</li>
          )
        })
      }
    </ul>
  )
}