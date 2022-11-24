import PropTypes from 'prop-types';
import React, { useState } from 'react';

import context from './context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [inputBanner, setInputBanner] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [idInfo, setIdInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);

  const value = {
    data,
    setData,
    inputBanner,
    setInputBanner,
    loading,
    setLoading,
    searchInput,
    setSearchInput,
    filteredResults,
    setFilteredResults,
    idInfo,
    setIdInfo,
    currentPage,
    setCurrentPage
  };

  return (
    <context.Provider value={value}>{children}</context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
