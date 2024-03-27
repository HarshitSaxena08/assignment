
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Login from './components/Login';
import Register from './components/Register';
import ProtectedPage from './components/ProtectedPage';

function App() {
  return (
    <div className="App">
      <Router> 
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/protected' element={<ProtectedPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
