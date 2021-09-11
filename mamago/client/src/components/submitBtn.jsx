import React from 'react';

const SubmitBtn = ({ transText }) => {
  return (
    <div>
      <button onClick={transText}>trans!</button>
    </div>
  );
};

export default SubmitBtn;
