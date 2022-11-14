import React, { useEffect, useContext } from 'react';
import context from '../contexts/context';


function SearchBar() {
  const contexts = useContext(context);
  const navigate = useNavigate();
  const { data, setData, searchInput, setSearchInput } = contexts;
  
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
            src='https://cdn-icons-png.flaticon.com/512/68/68213.png'
            alt='magnifier'
            className='sea'
          />
        </button>
      </form>
    </header>
  );
}

export default SearchBar;

