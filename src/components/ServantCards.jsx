import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GiBarbedStar } from 'react-icons/gi';
import context from '../contexts/context';
import matchTheUrl from '../services/Functions';
import '../styles/pages/servants.sass';

function ServantCards() {
  const contexts = useContext(context);
  const navigate = useNavigate();
  const { data } = contexts;
  return (
    <div className='servantsContainer'>
      <table>
        <thead>
          <tr>
            <th className='number'>
              <label>#Id</label>
            </th>
            <th className='servantsA'>
              <label>Servant</label>
            </th>
            <th className='rarity'>
              <label>Rarity</label>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, collectionNo, rarity, face, className }) => (
            <tr onClick={() => navigate(`/servants/${id}`)} key={id}>
              <td className='id'>{collectionNo}</td>
              <td className='container'>
                <img className='imageProfile' src={face} alt={name} />
                {name}
                <img
                  className='image'
                  src={matchTheUrl(className)}
                  alt={className}
                />
              </td>
              <td>
                {rarity} {<GiBarbedStar className='icon' />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ServantCards;
