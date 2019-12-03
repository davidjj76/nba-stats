import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(results => setData(results.data));
  }, [url]);

  return data;
}
