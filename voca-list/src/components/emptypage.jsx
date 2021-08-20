import React from 'react';
import { Link } from 'react-router-dom';

const Emptypage = (props) => {
  return (
    <>
      <h2>잘못된 접근입니다.</h2>
      <Link to='/'>돌아가기</Link>
    </>
  );
};

export default Emptypage;
