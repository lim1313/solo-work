import React from 'react';

const PicturesAll = ({ switchClick, picture }) => {
  const picClick = () => {
    switchClick(picture);
  };

  return (
    <>
      <img className='smallimg img1' src={picture} onClick={picClick} />
    </>
  );
};

export default PicturesAll;
