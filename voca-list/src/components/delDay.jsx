import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DelDay = ({ day: d }) => {
  const [day, setDay] = useState(d);

  const dayDel = () => {
    if (
      window.confirm(
        `day${day.day} 안의 모든 단어가 삭제됩니다. 정말 삭제하시겠습니까?`
      )
    ) {
      fetch(`http://localhost:3001/days/${day.id}`, {
        method: 'DELETE',
      }).then((res) => {
        if (res.ok) {
          setDay({ id: 0 });
        }
      });

      //! 다중 delete 어떻게 하는 거임??
      // http://localhost:3001/words?day=${day.day}로 접근하여 delete하려고 했는데,
      //해당 url은 배열을 보여준다. 배열의 경우 delete가 안되는 것인가??,,
      //하나 하나씩 삭제해주는 방법 밖에는 없는 것인가??
      fetch(`http://localhost:3001/words`)
        .then((res) => res.json())
        // 우선 임시방편으로 delete를 구현하기 위해서 filter로 삭제할 대상을 걸러주고 forEach로 하나씩 실행시켜 삭제해 주었다.
        // 하지만 해당 방법은 너무 불필요하게 서버 요청을 하는 것 같아서, 별로인 것 같다. 아직 서버는 안배워서 모르겠다...
        .then((data) => {
          data
            .filter((v) => v.day === day.day)
            .forEach((word) =>
              fetch(`http://localhost:3001/words/${word.id}`, {
                method: 'DELETE',
              })
            );
        });
    }
  };

  if (day.id === 0) {
    // return ' ';
    return null;
  }

  return (
    <li key={day.id}>
      <span onClick={dayDel} className='del_day'>
        day Delete
      </span>
      <Link to={`/day/${day.day}`}>Day {day.day}</Link>
    </li>
  );
};

export default DelDay;
