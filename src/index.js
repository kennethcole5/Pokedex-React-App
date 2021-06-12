import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Name from "file"
import { pokedexDataObject } from "../data/pokedexdata.js"


function renderApp {

  const baseURL = document.getElementById('baseURL').getAttribute('href')
  ReactDOM.render(
    < React.StrictMode >
      <App baseURL={baseURL} />
    </React.StrictMode >,
    document.getElementById('root')
  );
}

renderApp();
