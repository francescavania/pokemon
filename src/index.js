import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : [];

const globalState = {
  owned: []
}

if (persistedState.length !== 0) {
  globalState.owned = persistedState.owned
}

const rootReducer = (state = globalState, action) => {
  const { type, poke } = action;
  let i = 0
  switch (type) {
    case "ADD_POKE":
      if (state.owned.length >= 1) {
        i = state.owned[state.owned.length - 1].id + 1
      }
      return {
        ...state,
        owned: [...state.owned, { id: i, poke }]
      }
    case "DEL_POKE":
      return {
        ...state,
        owned: state.owned.filter(own => own.id !== poke)
      }
    default:
      return state;
  }
}

const store = createStore(rootReducer);

store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()));
})


console.log("persistedState", persistedState)
// const redux = require('redux');
console.log("store", store.getState())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

