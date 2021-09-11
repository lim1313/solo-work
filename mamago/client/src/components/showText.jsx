import React from 'react';

const ShowText = ({ resultText, changeLang, lang }) => {
  let { source, target } = lang;

  return (
    <>
      <select
        name='lang'
        value={target}
        onChange={(e) =>
          changeLang({
            source: e.target.value === source ? target : source,
            target: e.target.value,
          })
        }
      >
        <option value='ko'>ko</option>
        <option value='en'>en</option>
      </select>
      <form>
        <textarea
          type='textarea'
          className='langText showText'
          rows='10'
          cols='50'
          value={resultText}
        />
      </form>
    </>
  );
};

export default ShowText;
