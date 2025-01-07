import React from 'react';
import Home from './paginas/Home';
import Chegar from './paginas/Chegar';
import Cotacao from './paginas/Cotacao';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (

    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Chegar' element={<Chegar />} />
          <Route path='/Cotacao' element={<Cotacao />} />
        </Routes>

      </div>
    </Router>

  )
}

export default App;