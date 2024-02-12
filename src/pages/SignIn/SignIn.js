import React, { Component } from 'react';
import "./SignIn.css";
import axios from "axios";
import { Link } from 'react-router-dom';



axios.defaults.withCredentials = true;

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { username, password } = this.state;
      const response = await requestLogin(username, password);

      // 토큰을 받아오는 데 성공한 경우, 다음 로직을 수행할 수 있습니다.
      console.log('로그인 성공:', response);
      // 다른 동작을 수행하거나 페이지를 이동하는 등의 로직을 추가하세요.
    } catch (error) {
      // 로그인에 실패한 경우의 처리
      console.error('로그인 실패:', error);
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });

    // 예시로 폰트 패밀리 설정
    document.getElementById(name).style.fontFamily = 'Montserrat black';
  };

  setEmptyValue = (event) => {
    const { name } = event.target;
    document.getElementById(name).value = '';
  };


  render() {
    return (
      <div className="login">
        <h4>Sign In</h4>
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

export const requestLogin = async (username, password) => {
  // requestLogin 함수는 동일한 코드
};

export default Signin;