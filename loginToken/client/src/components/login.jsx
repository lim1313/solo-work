import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({ httpService, isLogin, accessTokenHandler }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const changeInput = (e) => {
    const {
      target: { name, value },
    } = e;
    switch (name) {
      case 'userId':
        return setUserId(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const login = async (e) => {
    e.preventDefault();
    let res = await httpService.login(userId, password);
    if (res === 401) {
      console.log('wrong');
      alert('try again');
    } else {
      accessTokenHandler(res.data.accessToken);
      isLogin(res.data.userId);
    }
  };

  return (
    <form>
      <div>아이디</div>
      <div>
        <input
          name='userId'
          type='text'
          value={userId}
          onChange={changeInput}
        />
      </div>
      <div>비밀번호</div>
      <div>
        <input
          name='password'
          type='password'
          value={password}
          onChange={changeInput}
        />
      </div>
      <button onClick={login}>login</button>
    </form>
  );
};

export default Login;
