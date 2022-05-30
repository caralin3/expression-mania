import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import theme from './appearance/theme/theme';
import { store } from './store';
import { Game, Home } from './pages';

export const ThemeContext = React.createContext(theme);

function App() {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeContext.Provider value={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="play" element={<Game />} />
            <Route path="how-to-play" element={<Game />} />
          </Routes>
        </ThemeContext.Provider>
      </PersistGate>
    </Provider>
  );
}

export default App;
