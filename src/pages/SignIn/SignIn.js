import React, { Component } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import './SignIn.css';

axios.defaults.withCredentials = true;

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: '',
      redirectToMain: false,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { email, pw } = this.state;

      // 로그인 요청 보내기
      const response = await axios.post('https://354f-116-47-108-171.ngrok-free.app/user/login', {
        email,
        pw,
      }, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://354f-116-47-108-171.ngrok-free.app/user/login',
        },
      });

      // 로그인 성공 시의 로직 추가
      console.log('로그인 성공:', response.data);

      this.setState({ redirectToMain: true });

    } catch (error) {
      // 로그인 실패 시의 로직 추가
      console.error('로그인 실패:', error.message);
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  setEmptyValue = (event) => {
    const { name } = event.target;
    this.setState({ [name]: '' });
  };

  render() {
    if (this.state.redirectToMain) {
      // redirectToMain이 true일 때 Main 페이지로 리디렉션
      return <Navigate to="/Main" />;
    }

    return (
      <div className="signin">
        <h4>Sign In</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="email">
            <input
              type="text"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              onFocus={this.setEmptyValue}
              className="text_input"
              placeholder="email"
            />
          </div>
          <div className="pw">
            <input
              type="password"
              id="pw"
              name="pw"
              value={this.state.pw}
              onChange={this.handleInputChange}
              onFocus={this.setEmptyValue}
              className="text_input"
              placeholder="pw"
            />
          </div>
          <input
            type="submit"
            value="SIGN IN"
            className="btn"
          />
        </form>
        <Link to="/signup" className="link">
          Sign Up
        </Link>
      </div>
    );
  }
}

export default SignIn;
