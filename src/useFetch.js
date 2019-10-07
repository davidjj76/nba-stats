import { useContext, useState, useEffect } from 'react';

import apiContext from './apiContext';

export default function useFetch(path) {
  const api = useContext(apiContext);
  const [data, setData] = useState(null);

  const url = `${api.baseUrl}${path}`;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(results => setData(results.data));
  }, [url]);

  return data;
}
