import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [name, setname] = useState('');
  const [pw, setpw] = useState('');
  const [email, setemail] = useState('');
  const [id] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {


      // 회원가입 요청 보내기
      const response = await axios.post('https://354f-116-47-108-171.ngrok-free.app/user/register', {
        name,
        pw,
        email,
        id,
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
        <div className="pw">
          <input
            type="password"
            name="pw"
            value={pw}
            onChange={(e) => setpw(e.target.value)}
            className="text_input"
            placeholder="pw"
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
