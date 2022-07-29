import PropTypes from 'prop-types';
import React, { useState } from 'react';

import context from './context';

function Provider({ children }) {
  const [inputName, setInputName] = useState('');

  const value = {
    inputName,
    setInputName,
  };

  return (
    <context.Provider value={value}>{children}</context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
