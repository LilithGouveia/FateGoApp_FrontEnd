import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/header.sass';
import mash from '../assets/FGO_icon.webp'

function Header() {
  const navigate = useNavigate();
  return (
    <header className='headContainer'>
      <div className='headers'>
        <img
          src={mash}
          alt='girl with gray hair logo'
          className='headImage'
          onClick={() => navigate(`/`)}
        />
        <img
          src='https://anime.fate-go.us/ep7-tv/tv/assets/img/logo.png'
          alt='logo of fate grand order'
          className='logo'
        />
      </div>
      <div className='menu'>
        <button className='headButton'>Tier List</button>
        <button
          className='headButton'
          type='button'
          onClick={() => navigate(`/servants`)}
        >
          Servants
        </button>
        <button className='headButton'>Banners</button>
      </div>
      <form action='/' method='GET' className='form'>
        <input type='search' placeholder='Search' className='search-field' />
        <button type='submit' className='search-button'>
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
