import React, { useEffect, useContext } from 'react';
import { fetchAllServants } from '../services/Apis';
import { useNavigate } from 'react-router-dom';
import context from '../contexts/context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Notfound from '../components/messages/NotFound';
import Loading from '../components/messages/Loading';
import FilterByClass from '../components/FilterbyClass';
import ServantCards from '../components/ServantCards';
import '../styles/pages/servants.sass';

function Pagination() {
  const contexts = useContext(context);
  const navigate = useNavigate();
  const { data, setData, loading, setLoading, setFilteredResults, filteredResults, currentPage, setCurrentPage } = contexts;
  const numberOfItens = 30;
  const offset = currentPage * numberOfItens;
  const currentPageData = filteredResults
    .slice(offset, offset + numberOfItens)
    .map(({ id, name, collectionNo, rarity, face, className }) => (
      <tr onClick={() => navigate(`/servants/${id}`)} key={id}>
        <td className='id'>{collectionNo}</td>
        <td className='container'>
          <img className='imageProfile' src={face} alt={name} />
          {name}
          <img className='image' src={matchTheUrl(className)} alt={className} />
        </td>
        <td>
          {rarity} {<GiBarbedStar className='icon' />}
        </td>
      </tr>
    ));
  
  // useEffect(() => {
  //   try {
  //     const initialFetch = async () => {
  //       const result = await fetchAllServants();
  //       setData(result);
  //       setLoading(false);
  //       setFilteredResults(result);
  //     };
  //     initialFetch();
  //   } catch (erro) {
  //     console.log(erro);
  //   }
  // }, []);

  return (
    <div className='servants'>
      <Header />
      <FilterByClass />
      {loading === true ? <Loading /> : null}
      {data === null ? <Notfound /> : <ServantCards />}
      <Footer />
    </div>
  );
}

export default Pagination;

