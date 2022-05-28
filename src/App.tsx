import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import { Counter, Logo } from './components';
import { store } from './store';
import theme from './appearance/theme/theme';

function Home() {
  return (
    <>
      <main className="text-white">
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link className="text-white" to="/about">
          About
        </Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main className="text-white">
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link className="text-white" to="/">
          Home
        </Link>
      </nav>
    </>
  );
}

export const ThemeContext = React.createContext(theme);

function App() {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeContext.Provider value={theme}>
          <div
            className={
              'bg-gray-800 h-screen w-screen overflow-hidden flex items-center justify-center flex-col'
            }
          >
            <a
              className="text-white"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <Logo size="lg" />
            <Counter />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
            </Routes>
          </div>
        </ThemeContext.Provider>
      </PersistGate>
    </Provider>
  );
}

export default App;
