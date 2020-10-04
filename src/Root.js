import React from 'react';

import { Provider } from 'react-redux';
import reducers from 'reducers';
import { createStore } from 'redux';

export default ({ children, initialState = {} }) => {
  return (
    <Provider store={createStore(reducers, initialState)}>{children}</Provider>
  );
};
