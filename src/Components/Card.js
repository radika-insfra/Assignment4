import React from 'react';
import lady from '../Assets/assign4image.webp';
import './Card.css';

const Card = () => {
  return (
    <div className="Card">
        <img src={lady} alt="lady" className='img' />
        <div className="Container">
            <h3>Product 1 <strong>Dress</strong></h3>
            <b>LKR: 3,000.00</b>
            <div className='Button-Selection'>
                <button className='xs-button'>XS</button>
                <button className='s-button'>S</button>
                <button className='m-button'>M</button>
                <button className='l-button'>L</button>
                <button className='xl-button'>XL</button>
            </div>
        </div>
    </div>
  )
}

export default Card