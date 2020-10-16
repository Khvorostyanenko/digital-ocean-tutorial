import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const initialState = [
  'some description for Marat',

];

function hello(state = initialState, action) {
  return state;
}

const store = createStore(hello);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// import {createStore} from 'redux';

// function playlist(state = [], action) {
//   if (action.type === 'ADD_TRACK') {
//     return  [
//       ...state,
//       action.payload
//     ];
//   }
//   return state;
// }

// const store = createStore(playlist);


// store.subscribe (() => {
//   console.log('subscribe', store.getState());
// })

// store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like tin spirit'});
// store.dispatch({ type: 'ADD_TRACK', payload: 'Enter Sandman'});