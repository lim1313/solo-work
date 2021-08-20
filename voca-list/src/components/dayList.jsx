import useFeth from '../hooks/useFetch';
import DelDay from './delDay';

export default function DayList() {
  const days = useFeth('http://localhost:3001/days');

  if (days.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <ul className='list_day'>
      {days.map((day) => (
        <DelDay key={day.id} day={day} />
      ))}
    </ul>
  );
}
