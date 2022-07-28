
import React from 'react';
import '../styles/components/header.sass';
import mash from '../images/FGO_icon.webp';
import gem from '../images/gem.png';

const lala =
  'https://www.kindpng.com/picc/m/260-2608908_fate-grand-order-logo-hd-png-download.png';
  
function Header() {
  return (
    <footer className='headContainer'>
      <img src={mash} alt='girl with gray hair logo' className='headImage' />
      <button className='headButton'>
        Tier List
        <img src={gem} alt='girl with gray hair logo' className='secret' />
      </button>
    </footer>
  );
}

export default Header;
