import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const serverURL = 'http://localhost:3000';

axios.defaults.withCredentials = true;

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // 비밀번호와 확인 비밀번호 일치 여부 확인
      if (this.state.password !== this.state.confirmPassword) {
        throw new Error('비밀번호가 일치하지 않습니다.');
      }

      // 회원가입 요청 보내기
      const response = await requestSignup(this.state.username, this.state.password);

      // 회원가입 성공 시의 로직 추가
      console.log('회원가입 성공:', response);
    } catch (error) {
      // 회원가입 실패 시의 로직 추가
      console.error('회원가입 실패:', error.message);
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  setEmptyValue = (event) => {
    const { name } = event.target;
    document.getElementById(name).value = '';
  };

  render() {
    return (
      <div className="signup">
        <h4>Sign Up</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="id">
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              onFocus={this.setEmptyValue}
              className="text_input"
              placeholder="Username"
            />
          </div>
          <div className="password">
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              onFocus={this.setEmptyValue}
              className="text_input"
              placeholder="Password"
            />
          </div>
          <div className="confirm-password">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleInputChange}
              onFocus={this.setEmptyValue}
              className="text_input"
              placeholder="Confirm Password"
            />
          </div>
          <input
            type="submit"
            value="SIGN UP"
            className="btn"
          />
        </form>
        <Link to="/signin">Go to SignIn</Link>
      </div>
    );
  }
}

export const requestSignup = async (username, password) => {
  // 회원가입 요청 보내기
  return await axios.post(`${serverURL}/signup`, {
    username: username,
    password: password,
  });
};

export default Signup;