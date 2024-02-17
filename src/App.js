import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn'; 
import SignUp from './pages/SignUp/SignUp';
import './App.css';
import api from './api/api';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getData();
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
  
}

export default App;
