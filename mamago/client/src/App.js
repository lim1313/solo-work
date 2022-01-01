import './App.css';
import Write from './components/write';
import SubmitBtn from './components/submitBtn';
import ShowText from './components/showText';

import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [lang, setLang] = useState({ source: 'ko', target: 'en' });
  const [resultText, setResultText] = useState('');

  const transText = () => {
    if (text.length !== 0 && lang.source !== lang.target) {
      fetch(
        `http://localhost:5000/translate?source=${lang.source}&target=${lang.target}&text=${text}`
      )
        .then((res) => res.json())
        .then((data) => {
          setResultText(data.message.result.translatedText);
        });
    } else {
      console.log('type text');
    }
  };
  const changeText = (value) => {
    setText(value);
  };

  const changeLang = (value) => {
    setLang(value);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h3>mini Mamago</h3>
      <Write
        changeText={changeText}
        changeLang={changeLang}
        text={text}
        lang={lang}
      />
      <SubmitBtn transText={transText} />
      <ShowText resultText={resultText} changeLang={changeLang} lang={lang} />
    </div>
  );
}

export default App;
