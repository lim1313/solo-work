import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
  return (
    <>
      <Link to='/'>home</Link>
      <Link to='/about'>about</Link>
      <Link to='/picture'>picture</Link>
    </>
  );
};
export default SideBar;
