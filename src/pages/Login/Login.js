import React, { Component } from 'react';
import "./login.css";
import md5 from 'md5';
import axios from "axios";

const serverURL = 'http://example.com';
axios.defaults.withCredentials = true;

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'username',
      password: 'password',
    }
  }

  
  handleInputChange = (event) => {
    const target = event.target;
    let value = event.target.value;
    const name = target.name;

    if (target.name === "password") {
      document.getElementById(name).type = "password";
      value = md5(event.target.value);
    }

    this.setState({
      [name]: value
    });

    document.getElementById(name).style.fontFamily = "Montserrat black";
  }

  setEmptyValue = (event) => {
    const name = event.target.name
    document.getElementById(name).value = "";

  }

  render() {
    return (
      <div className="login">
        <h4>Sign In</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="text_area">
            <input
              type="text"
              id="username"
              name="username"
              defaultValue={this.state.username}
              onChange={this.handleInputChange}
              onFocus={this.setEmptyValue}
              className="text_input"

            />
          </div>
          <div className="text_area">
            <input
              type="text"
              id="password"
              name="password"
              defaultValue={this.state.password}
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
        <a className="link" href="/signup">Sign Up</a>
      </div>
    )
  }
}

export const requestLogin = async (email, pw) => {
  return await axios
    .post(
      `${serverURL}/login/`,
      {
        email: email,
        password: pw,
      },
      { withCredentials: true }
    )
    .then((response) => {
      /// token이 필요한 API 요청 시 header Authorization에 token 담아서 보내기
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.access_token}`;
      return response.data;
    })
    .catch((e) => {
      console.log(e.response.data);
      return "이메일 혹은 비밀번호를 확인하세요.";
    });
};

export default Signin;