import React from 'react';

const Write = ({ changeText, changeLang, text, lang }) => {
  let { source, target } = lang;
  return (
    <>
      <select
        name='lang'
        value={source}
        onChange={(e) =>
          changeLang({
            source: e.target.value,
            target: e.target.value === target ? source : target,
          })
        }
      >
        <option value='ko'>ko</option>
        <option value='en'>en</option>
      </select>
      <form>
        <textarea
          type='textarea'
          className='langText inputText'
          rows='10'
          cols='50'
          value={text}
          onChange={(e) => changeText(e.target.value)}
        />
      </form>
    </>
  );
};

export default Write;
