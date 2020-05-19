import { useState, useEffect, useContext } from 'react';
import apiContext from './apiContext';

export default function useFetch(path) {
  const { baseUri } = useContext(apiContext);
  const [data, setData] = useState(null);

  const url = `${baseUri}/${path}`;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(results => setData(results.data));
  }, [url]);

  return data;
}
