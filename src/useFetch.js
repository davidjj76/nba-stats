import { useReducer, useEffect } from 'react';

const initValue = {
  isFetching: false,
  data: null,
  error: null,
};

function fetchReducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { isFetching: true, data: null, error: null };
    case 'FETCH_SUCCESS':
      return { isFetching: false, data: action.data, error: null };
    case 'FETCH_FAILURE':
      return { isFetching: false, data: null, error: action.error };
    default:
      return state;
  }
}

export default function useFetch(url) {
  const [value, dispatch] = useReducer(fetchReducer, initValue);

  useEffect(() => {
    dispatch({ type: 'FETCH_REQUEST' });
    fetch(url)
      .then(response => response.json())
      .then(results => dispatch({ type: 'FETCH_SUCCESS', data: results.data }))
      .catch(error => dispatch({ type: 'FETCH_FAILURE', error }));
  }, [url]);

  return value;
}
