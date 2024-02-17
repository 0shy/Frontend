import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // 비밀번호와 확인 비밀번호 일치 여부 확인
      if (password !== confirmPassword) {
        throw new Error('비밀번호가 일치하지 않습니다.');
      }

      // 회원가입 요청 보내기
      const response = await axios.post('https://2221-116-47-108-171.ngrok-free.app/user/register', {
        username,
        password,
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000/',
      },
      });

      // 회원가입 성공 시의 로직 추가
      console.log('회원가입 성공:', response.data);
    } catch (error) {
      // 회원가입 실패 시의 로직 추가
      console.error('회원가입 실패:', error.message);
    }
  };

  return (
    <div className="signup">
      <h4>Sign Up</h4>
      <form onSubmit={handleSubmit}>
        <div className="id">
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="text_input"
            placeholder="Username"
          />
        </div>
        <div className="password">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text_input"
            placeholder="Password"
          />
        </div>
        <div className="confirm-password">
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="text_input"
            placeholder="Confirm Password"
          />
        </div>
        <input type="submit" value="SIGN UP" className="btn" />
      </form>
    </div>
  );
};

export default SignUp;