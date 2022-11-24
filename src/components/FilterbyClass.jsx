import React, { useContext } from 'react';
import { matchTheUrl, servantsOne, servantsTwo } from '../services/Functions';
import context from '../contexts/context';
import '../styles/pages/servants.sass';

function FilterByClass() {
  const searchItem = (classValue) => {
    const filteredData = data.filter((item) => {
      return Object.values(item)
      .join('')
      .toLowerCase()
      .includes(classValue.toLowerCase());
    });
    setFilteredResults(filteredData);
  };
  const classes = (array) => {
    {
      return array.map((arrayItem) => (
        <img
          className='images'
          src={matchTheUrl(arrayItem)}
          alt={arrayItem}
          key={arrayItem}
          onClick={() => searchItem(arrayItem)}
        />
      ));
    }
  };
   const contexts = useContext(context);
   const { data, setFilteredResults } = contexts;
  return (
    <div className='filterClass'>
      <p> Filter by Class </p>
      <div className='searchClass'>
        {classes(servantsOne)}
      </div>
      <div className='searchClass2'>
        {classes(servantsTwo)}
      </div>
    </div>
  );
}

export default FilterByClass;
