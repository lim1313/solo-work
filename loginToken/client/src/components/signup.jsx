import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Signup = ({ httpService }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [checkClk, setCheckClk] = useState(false);
  // 존재하지 않은 id로만 회원가입 가능
  const [isExist, setIsExist] = useState();

  const history = useHistory();

  const changeInput = (e) => {
    const {
      target: { name, value },
    } = e;
    switch (name) {
      case 'userId':
        return setUserId(value);
      case 'password':
        return setPassword(value);
      case 'email':
        return setEmail(value);
      default:
        return;
    }
  };

  const signup = async (e) => {
    e.preventDefault();
    const res = await httpService.singup(userId, password, email);
    if (res === 201) {
      alert('success');
      history.push('/login');
    } else {
      console.log(res);
      alert('already exist');
    }
  };

  const checkId = async (e) => {
    e.preventDefault();
    const data = await httpService.checkId(userId);
    setCheckClk(true);
    setIsExist(httpService.response(data));
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
        <button onClick={checkId}>아이디 중복확인</button>
      </div>
      {checkClk ? (
        isExist ? (
          <div>사용가능한 ID</div>
        ) : (
          <div>이미 존재하는 ID</div>
        )
      ) : null}
      <div>비밀번호</div>
      <div>
        <input
          name='password'
          type='password'
          value={password}
          onChange={changeInput}
        />
      </div>
      <div>이메일</div>
      <div>
        <input name='email' type='email' value={email} onChange={changeInput} />
      </div>
      <button onClick={signup}>회원가입하기!</button>
    </form>
  );
};

export default Signup;
