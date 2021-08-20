import { useHistory } from 'react-router-dom';
import useFeth from '../hooks/useFetch';

export default function CreateDay() {
  const day = useFeth('http://localhost:3001/days');
  const history = useHistory();

  const addDay = () => {
    fetch(`http://localhost:3001/days/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: Date.now(),
        day: day.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert(`${day.length + 1}일 생성 완료`);
        history.push('/');
      }
    });
  };

  return (
    <div>
      <h3>현재일 수 : {day.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
}
