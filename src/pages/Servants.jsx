import React, { useEffect, useContext } from 'react';
import { fetchAllServants } from '../services/Apis';
import { useNavigate } from 'react-router-dom';
import { GiBarbedStar } from 'react-icons/gi';
import context from '../contexts/context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Notfound from '../components/messages/NotFound';
import Loading from '../components/messages/Loading'
import matchTheUrl from '../services/Functions';
import '../styles/pages/servants.sass';

function Servants() {
  const contexts = useContext(context);
  const navigate = useNavigate();
  const { data, setData, loading, setLoading } = contexts;


  useEffect(() => {
    try {
      const initialFetch = async () => {
        const result = await fetchAllServants();
        setData(result);
        setLoading(false)
      };
      initialFetch();
    } catch (erro) {
      console.log(erro);
    }
  }, []);

  return (
    <div className='servants'>
      <Header />
      {loading === true ? <Loading /> : null}
      {data === null ? (
        <Notfound />
      ) : (
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
              {data
                .map(
                  ({ id, name, collectionNo, rarity, face, className }) => (
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
                      {rarity} {<GiBarbedStar className='icon'/>}
                    </td>
                  </tr>
                )
                )}
            </tbody>
          </table>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Servants;
