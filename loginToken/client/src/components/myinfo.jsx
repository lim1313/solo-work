import React, { useState } from 'react';
import axios from 'axios';

const Myinfo = ({ accessToken, accessTokenHandler }) => {
  const [content, setContent] = useState('');
  const [again, setAgain] = useState(false);

  const myinfoClick = () => {
    console.log('click');
    axios({
      url: 'http://localhost:4000/myinfo',
      method: 'GET',
      headers: { Authorization: `Bearer ${accessToken}` },
      withCredentials: true,
    }).then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        setContent(res.data.data.userId);
      } else {
        setContent('try refresh your token');
        setAgain(true);
      }
    });
  };

  const refreshAccess = () => {
    axios({
      url: 'http://localhost:4000/refresh',
      method: 'post',
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(res.data);
          accessTokenHandler(res.data.data.accessToken);
          setAgain(false);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>myinfo</div>
      <button onClick={myinfoClick}>btn</button>
      <div>{content}</div>
      {again && <button onClick={refreshAccess}>refresh Token</button>}
    </>
  );
};

export default Myinfo;
