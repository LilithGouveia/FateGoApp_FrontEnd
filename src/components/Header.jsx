import React from 'react';
import '../styles/components/header.sass';
import mash from '../images/FGO_icon.webp'
import gem from '../images/gem.png'

function Header() {
  return (
    <header className='headContainer'>
      <img src={mash} alt='girl with gray hair logo' className='headImage' />
      <button className='headButton'>
        Tier List
        <img src={gem} alt='girl with gray hair logo' className='secret' />
      </button>
      <button className='headButton'>
        Servants
        <img src={gem} alt='girl with gray hair logo' className='secret' />
      </button>
      <button className='headButton'>
        Simulator
        <img src={gem} alt='girl with gray hair logo' className='secret' />
      </button>
      <button className='headButton'>
        Banners
        <img src={gem} alt='girl with gray hair logo' className='secret' />
      </button>
    </header>
  );
}

export default Header;
