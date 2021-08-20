import { useEffect, useState } from 'react';

export default function useFeth(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        return setData(data);
      });
  }, [url]);

  return data;
}
