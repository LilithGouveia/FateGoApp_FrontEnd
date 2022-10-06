import React, { useEffect, useContext } from 'react';
import { fetchAllServants } from '../services/Apis';
import { useNavigate } from 'react-router-dom';
import { GiBarbedStar } from 'react-icons/gi';
import context from '../contexts/context';
import Notfound from '../components/messages/NotFound';
import Loading from '../components/messages/Loading';
import matchTheUrl from '../services/Functions';
import '../styles/pages/servants.sass';

const elementButton = (param) => {
  return <img className='images' src={matchTheUrl(param)} alt={param} />;
};

const renderButton = (param1, param2) =>{
  return (
    <div className={ param2 }>
      {param1.map((servant) => elementButton(servant))}
    </div>
  );
}

const makeTheButton = () => {
  const servantsOne = ['saber','archer', 'lancer', 'assassin', 'caster', 'berserker', 'rider', 'avenger'];
  const servantsTwo = ['ruler', 'moonCancer', 'pretender', 'shielder', 'foreigner', 'alterEgo', 'beast'];
  return (
    <div className='filterClass'>
      <p> Filter by Class </p>
      { renderButton(servantsOne, 'searchClass1') };
      { renderButton(servantsTwo, 'searchClass2') };
    </div>
  );
};

// const FilterByClass({ data }) => {

// }

// function lala(lala) {
//   for (let i = 0; i < lala.length; i++) {
//     let ii = lala.indexof(lala[i]);
//     if(ii = i) {
//       console.log(lala[i]);
//     }
//   }
// }