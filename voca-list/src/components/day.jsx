import { useParams } from 'react-router-dom';
import useFeth from '../hooks/useFetch';
import Word from './word';

export default function Day() {
  const day = useParams().day;
  // const wordList = dummy.words.filter((word) => word.day === Number(day));
  //day가 string이기 때문에 Number로 바꿔줘야 한다.

  const words = useFeth(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <Word key={word.id} word={word} />
          ))}
        </tbody>
      </table>
    </>
  );
}
