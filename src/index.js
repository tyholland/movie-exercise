import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MovieSearch from './pages/movie-search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieSearch />
  </React.StrictMode>
);
