import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ login }) => {
  return (
    <ul>
      <li>
        <Link to='/'>{login} welcome!!! </Link>
      </li>
      {login ? (
        <li>
          <Link to='/myinfo'>myinfo</Link>
        </li>
      ) : (
        <>
          <li>
            <Link to='/login'>login</Link>
          </li>
          <li>
            <Link to='/signup'>signup</Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default Nav;
