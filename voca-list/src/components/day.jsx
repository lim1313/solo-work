import { useParams } from 'react-router-dom';
import dummy from '../db/data.json';
import Word from './word';

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
            <Word key={word.id} word={word} />
          ))}
        </tbody>
      </table>
    </>
  );
}
