import React from 'react';
import lady from '../Assets/assign4image.webp';
import Options from './Options';
import './Card.css';
import './Options.css';

const Card = () => {
  return (
    <div className='overViewContainer'>
      <div className="Card">
        <div className='img-container'>
          <img src={lady} alt="lady" className='img' />
        </div>
        <h3>Product 1 <strong>Dress</strong></h3>
          <b>LKR: 3,000.00</b>
          <Options/>
      </div>
    </div>
  )
}

export default Card