import React, { useEffect, useContext } from 'react';
import { fetchAllServants } from '../services/Apis';
import { useNavigate } from 'react-router-dom';
import context from '../contexts/context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Notfound from '../components/messages/NotFound';
import Loading from '../components/messages/Loading'
import matchTheIcon from '../services/Functions'
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
                <th>
                  <label>Number</label>
                </th>
                <th>
                  <label>Servant</label>
                </th>
                <th>
                  <label>Rarity</label>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                ({ id, name, collectionNo, rarity, face, className }) => (
                  <tr onClick={() => navigate(`/servants/${id}`)} key={id}>
                    <td className='number'>{collectionNo}</td>
                    <td>
                      <img className='image' src={face} alt={name} />
                    </td>
                    <td className='name'>{name}</td>
                    <td className='class'>
                      <img className='image' src={matchTheIcon(className)} alt={className} />
                    </td>
                    <td>{rarity}</td>
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
