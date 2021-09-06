import { useEffect, useState } from 'react';
import './App.css';
import getProverbs from './storageUtill';

function App() {
  const [proverbs, setProverbs] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    let prov = getProverbs(filter);
    setProverbs(prov);
  }, [filter]);

  const changeText = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <div>
        <span>필터</span>
        <input type='text' onChange={changeText}></input>
      </div>
      <ul>
        {proverbs.map((v) => (
          <li>{v}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
