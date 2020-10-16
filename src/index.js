import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'

const initialState = {
  alertVisible: false
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_ALERT':
      return {
        ...state,
        alertVisible: true
      }
    case 'HIDE_ALERT':
      return {
        ...state,
        alertVisible: false
      }
    default:
      return state
  }
}

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
