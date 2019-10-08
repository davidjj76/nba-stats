import { useContext, useState, useEffect } from 'react';

import apiContext from './apiContext';

export default function useFetch(path) {
  const api = useContext(apiContext);
  const [data, setData] = useState(null);

  const url = `${api.baseUrl}${path}`;

  useEffect(() => {
    const controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then(response => response.json())
      .then(results => {
        setData(results.data);
      })
      .catch(error => {
        console.log(error.message);
      });

    return function() {
      controller.abort();
    };
  }, [url]);

  return data;
}
