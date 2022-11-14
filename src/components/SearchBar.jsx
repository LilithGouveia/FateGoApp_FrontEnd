import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import context from '../contexts/context';


function SearchBar() {
  const contexts = useContext(context);
  const navigate = useNavigate();
  const { data, searchInput, setSearchInput, setFilteredResults } = contexts;

  const searchItem = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
    const filteredData = data.filter((item) => {
      return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
    });
    setFilteredResults(filteredData);
  } else {
    setFilteredResults(data);
  }
  };
  
  return (
      <form action='/' method='GET' className='form'>
        <input type='search' placeholder='Search' className='search-field' onChange={(e) => searchItem(e.target.value)}/>
        <button type='submit' className='search-button'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/68/68213.png'
            alt='magnifier'
            className='sea'
          />
        </button>
      </form>
  );
}

export default SearchBar;

