import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn'; 
import SignUp from './pages/SignUp/SignUp';
import './App.css';
import axios from 'axios';

function App() {
  const [musicInfo, setMusicInfo] = useState([]); // setMusicInfo를 useState로 정의
  const [loading, setLoading] = useState(true); // setLoading을 useState로 정의

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/signup');
        setMusicInfo(response.data); // 가져온 데이터로 상태 업데이트
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error('데이터 가져오기 실패:', error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // 의존성 배열을 비워 한 번만 실행되도록 설정

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
