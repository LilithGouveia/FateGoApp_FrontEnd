import React, { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import context from '../contexts/context';
import '../styles/components/pagination.sass';

function Pagination() {
  const contexts = useContext(context);
  const navigate = useNavigate();
  const { filteredResults, currentPage, setCurrentPage } = contexts;
  const numberOfItens = 30;
  const offset = currentPage * numberOfItens;
  const pageCount = Math.ceil(filteredResults.length / numberOfItens);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

return (
  <div className='paginate'>
    <ReactPaginate
      previousLabel={'← Previous'}
      nextLabel={'Next →'}
      pageCount={pageCount}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      previousLinkClassName={'pagination__link'}
      nextLinkClassName={'pagination__link'}
      disabledClassName={'pagination__link--disabled'}
      activeClassName={'pagination__link--active'}
    />
  </div>
);
}

export default Pagination;

