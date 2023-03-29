import React from 'react';
import './card.scss';

const Card = (props) => {
  const { img, title, children } = props;

  return(
    <div className="card">
      <div className="image-container">
        <img src={img} alt="" />
      </div>
      <div className='card-body'>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  )
}

export default Card;