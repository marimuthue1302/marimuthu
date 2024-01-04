import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Home />
    </Router>
  )
}

export default App