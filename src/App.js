import React from 'react'
import { connect } from 'react-redux'
import './index.css'

const App = ({ alertVisible, showAlert, hideAlert }) => (
  <div className="p-10">
    <div
      className="bg-green-400 p-10 mb-3"
      style={{ display: alertVisible ? 'block' : 'none' }}
    >
      Alert content
    </div>
    <button type="button" onClick={showAlert} className="bg-gray-500 p-4 mr-2">
      Show alert
    </button>
    <button type="button" onClick={hideAlert} className="bg-gray-500 p-4">
      Hide alert
    </button>
  </div>
)

export default connect(
  state => ({
    alertVisible: state.alertVisible
  }),
  dispatch => ({
    showAlert: () => dispatch({ type: 'SHOW_ALERT' }),
    hideAlert: () => dispatch({ type: 'HIDE_ALERT' })
  })
)(App)
