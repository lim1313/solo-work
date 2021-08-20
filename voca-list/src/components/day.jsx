import { useParams } from 'react-router-dom';
import dummy from '../db/data.json';

export default function Day() {
  const day = useParams().day;
  console.log(day);
  const wordList = dummy.words.filter((word) => word.day === Number(day));
  //day가 string이기 때문에 Number로 바꿔줘야 한다.

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
