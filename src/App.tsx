import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"

import { Provider } from 'react-redux';

import store from './store';

import MainRoutes from './pages/Routes';

function App() {
  return (
        <Router>
          <Provider store={store}>
            <MainRoutes/>
          </Provider>
        </Router>
  );
}

export default App;
