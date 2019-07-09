import React from 'react';
import './App.css';
import Books from './pages/books';

import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <div className="App">
        <header className="App-header">
          <Books/>
        </header>
      </div>
    </ReduxProvider>
  );
}

export default App;
