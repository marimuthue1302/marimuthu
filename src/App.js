import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'

const App = () => {
  return (
    <Router>
      <NavBar />
    </Router>
  )
}

export default App