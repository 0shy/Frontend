import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setemail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      
      // 비밀번호와 확인 비밀번호 일치 여부 확인
      //if (password !== confirmPassword) {
      //  throw new Error('비밀번호가 일치하지 않습니다.');
      //}

      // 회원가입 요청 보내기
      const response = await axios.post('https://8863-116-47-108-171.ngrok-free.app/user/register', {
        name,
        password,
        email,
      }, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000',
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
        <div className="name">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="text_input"
            placeholder="name"
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
        <div className="email">
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="text_input"
            placeholder="email"
          />
        </div>
        <input type="submit" value="SIGN UP" className="btn" />
      </form>
    </div>
  );
};

export default SignUp;
