import { useState, useEffect, useContext } from 'react';
import apiContext from './apiContext';

export default function useFetch(path) {
  const { baseUri } = useContext(apiContext);
  const [data, setData] = useState(null);

  const url = `${baseUri}/${path}`;

  useEffect(() => {
    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then(response => response.json())
      .then(results => setData(results.data))
      .catch(error => console.log(error));

    return function () {
      controller.abort();
    };
  }, [url]);

  return data;
}
