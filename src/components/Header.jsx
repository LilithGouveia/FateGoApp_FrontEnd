import React from 'react';
import '../styles/components/header.sass';
import mash from '../assets/FGO_icon.webp'
import gem from '../assets/gem.png'

function Header() {
  return (
    <header className='headContainer'>
      <div className='headers'>
        <img src={mash} alt='girl with gray hair logo' className='headImage' />
        <img
          src='https://anime.fate-go.us/ep7-tv/tv/assets/img/logo.png'
          alt='logo of fate grand order'
          className='logo'
        />
      </div>
      <div className='menu'>
        <button className='headButton'>Tier List</button>
        <button className='headButton'>Servants</button>
        <button className='headButton'>Banners</button>
      </div>
      <form action='/' method='GET' className='form'>
        <input type='search' placeholder='Search' className='search-field' />
        <button type='submit' class='search-button'>
          <img
            src='https://cdn.icon-icons.com/icons2/1111/PNG/512/loupe_79257.png'
            alt='magnifier'
            className='sea'
          />
        </button>
      </form>
    </header>
  );
}

export default Header;
