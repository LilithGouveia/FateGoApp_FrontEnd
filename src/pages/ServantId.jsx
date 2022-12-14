import React, { useEffect, useContext } from 'react';
import { fetchAllServants } from '../services/Apis';
import { useNavigate } from 'react-router-dom';
import context from '../contexts/context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Notfound from '../components/messages/NotFound';
import Loading from '../components/messages/Loading';
import FilterByClass from '../components/FilterbyClass';
import AboutServants from '../components/AboutServants';
import '../styles/pages/servants.sass';

function ServantId() {
  const contexts = useContext(context);
  const navigate = useNavigate();
  const { data, filteredResults } = contexts;

  useEffect(() => {
    try {
      const initialFetch = async () => {
       // setLoading(false);
      };
      initialFetch();
    } catch (erro) {
      console.log(erro);
    }
  }, []);

  return (
    <div className='servants'>
      <Header />
      <FilterByClass />
      {/* {loading === true ? <Loading /> : null} */}
      {data === null ? <Notfound /> : <div className='aboutServants'>
        <AboutServants />
      </div>}
      <Footer />
    </div>
  );
}

export default ServantId;
