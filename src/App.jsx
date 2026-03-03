import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Signup from './Pages/Signup'
import ScanDets from './Pages/ScanDets'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scan" element={<ScanDets />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App