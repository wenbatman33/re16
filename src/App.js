import React from 'react';
import Router from 'Router';
import { Provider } from 'react-redux';
import configureStore from 'store';

function App() {
  return (
    <Provider store={configureStore()}>      
      <Router/>
    </Provider>
  );
}

export default App;
