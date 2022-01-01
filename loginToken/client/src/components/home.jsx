import React, { useEffect } from 'react';

const Home = ({ login }) => {
  useEffect(() => {
    console.log('hello');
  }, []);

  return (
    <>
      {login ? (
        <div>{login}님~~!! 로그인 확인 완료!</div>
      ) : (
        <div>로그인하세요~~!</div>
      )}
    </>
  );
};

export default Home;
