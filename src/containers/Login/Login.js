import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/user';
import './Login.css';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  };

  changeUserName = event => {
    this.setState({
      username: event.target.value
    });
  };

  changePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const { dispatch } = this.props;
    dispatch(
      login({
        username,
        password
      })
    );
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="login-page">
        <form>
          <div>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="请输入用户名"
              onChange={this.changeUserName}
            />
          </div>
          <div>
            <input
              type="text"
              name="password"
              value={password}
              placeholder="请输入密码"
              onChange={this.changePassword}
            />
          </div>
          <div>
            <button onClick={this.handleSubmit}>登录</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(Login);
