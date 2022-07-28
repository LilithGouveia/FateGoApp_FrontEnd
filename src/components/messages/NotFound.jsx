import React from 'react';
import gilga from '../../images/gilga1april.png';
import atal from '../../images/atalante1april.png';
import '../../styles/components/messages.sass'

function NotFound() {
  return (
    <div className='notContainer'>
      <img src={gilga} alt='gilga 1 april version' className='imageMessage' />
      <p className='messageText'>Not Found, try again</p>
      <img className='imageMessage' src={atal} alt='atalante 1 april version' />
    </div>
  );
}

export default NotFound;
