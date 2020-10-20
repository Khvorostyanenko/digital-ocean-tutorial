import React, { useState } from 'react'

const DivTogglerReact = () => {
  const [alertVisible, setAlertVisible] = useState(false)
  return (
    <div className="p-10">
      <div
        className="bg-green-400 p-10 mb-3"
        style={{ display: alertVisible ? 'block' : 'none' }}
      >
        Alert content
      </div>
      <button
        type="button"
        onClick={() => setAlertVisible(true)}
        className="bg-gray-500 p-4 mr-2"
      >
        Show alert
      </button>
      <button
        type="button"
        onClick={() => setAlertVisible(false)}
        className="bg-gray-500 p-4"
      >
        Hide alert
      </button>
    </div>
  )
}

export default DivTogglerReact
