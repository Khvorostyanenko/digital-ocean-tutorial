import React from 'react'
import './index.css'
import DivTogglerReact from './DivTogglerReact'
import DivTogglerRedux from './DivTogglerRedux'
// расширение js файлов указывать не надо
// import DivTogglerRedux from './DivTogglerRedux.js'

const App = () => (
  <div>
    <DivTogglerRedux />
    <DivTogglerReact />
  </div>
)

export default App
