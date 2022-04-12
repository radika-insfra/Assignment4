import React from 'react';
import './Options.css';

const Options = () => {

  let options = [
    {
      id: 1,
      text: 'XS',
    },
    {
      id: 2,
      text: 'S'
    },
    {
      id: 3,
      text: 'M'
    },
    {
      id: 4,
      text: 'L'
    },
    {
      id: 5,
      text: 'XL'
    }
  ];

  return (
    <div className='option-container'>
      {options.map((val, i) => {
        return <div key={val.id} className="optionItem">{val.text}</div>;
      })}
    </div>
  )
}

export default Options