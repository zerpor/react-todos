import React from 'react';
import { connect } from 'react-redux';
import PageHeader from '../components/PageHeader';
import Login from './Login/Login';
import Todos from './ToDos/Todos';
import './App.css';

const mapStateToProps = state => {
  return {
    userInfo: state.user.userInfo
  };
};

function App(props) {
  const { userInfo } = props;
  return (
    <div className="App">
      <PageHeader userInfo={userInfo} />
      {userInfo ? <Todos /> : <Login />}
    </div>
  );
}

export default connect(mapStateToProps)(App);
