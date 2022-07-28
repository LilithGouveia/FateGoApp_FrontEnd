import React from 'react';
import gudako from '../../images/Gudako.webp'
import '../../styles/components/messages.sass';

function Loading() {
  return (
    <div className='notContainer'>
      <img
        src='https://gamepress.gg/grandorder/sites/grandorder/files/2018-04/DaVinciAF.png'
        alt='Da Vinci 1 april version'
        className='imageMessage'
      />
      <p className='messageText'>Loading Chaldea system</p>
      <img
        src={ gudako }
        alt='Gudako 1 april version'
        className='imageMessage'
      />
    </div>
  );
}

export default Loading;
