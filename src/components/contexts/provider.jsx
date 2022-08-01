import PropTypes from 'prop-types';
import React, { useState } from 'react';

import context from './context';

function Provider({ children }) {
  const [inputName, setInputName] = useState('');
  const [inputBanner, setInputBanner] = useState('');

  // o input encontrará informações sobre personagens e sobre o banner.
  //tier list
  // banners
  //lore?

  const value = {
    inputName,
    setInputName,
    inputBanner,
    setInputBanner,
  };

  return (
    <context.Provider value={value}>{children}</context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
