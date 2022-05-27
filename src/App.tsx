import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './store';

import './App.css';
import { Counter, Logo } from './components';

function App() {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div
          className={
            'bg-gray-800 h-screen w-screen overflow-hidden flex items-center justify-center flex-col'
          }
        >
          <a
            className="App-link text-white"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Logo size="lg" />
          <Counter />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
