import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useFeth from '../hooks/useFetch';

const CreateWord = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const days = useFeth('http://localhost:3001/days');

  const engRef = useRef();
  const korRef = useRef();
  const dayRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    let engR = engRef.current.value;
    let korR = korRef.current.value;

    if (!isLoading && engR && korR) {
      setIsLoading(true);
      // 단어가 생성 중일 경우(= isLoading 이 false인 경우)는 save 방지

      fetch(`http://localhost:3001/words/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: Date.now(),
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        }),
      }).then((res) => {
        console.log(res);
        if (res.ok) {
          alert('생성완료');
          history.push(`/day/${dayRef.current.value}`);
          setIsLoading(false);
        }
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='input_area'>
        <label>Eng</label>
        <input type='text' placeholder='computer' ref={engRef} />
      </div>
      <div className='input_area'>
        <label>Kor</label>
        <input type='text' placeholder='컴퓨터' ref={korRef} />
      </div>
      <div className='input_area'>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id}>{day.day}</option>
          ))}{' '}
        </select>
      </div>

      <button
        style={{
          opacity: isLoading ? 0.3 : 1,
        }}
      >
        {isLoading ? 'SAVEING...' : 'SAVE'}
      </button>
    </form>
  );
};

export default CreateWord;
