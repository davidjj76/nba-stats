import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useFetch from './useFetch';
import Loading from './Loading';

const renderPlayer = ({ id, first_name, last_name }) => (
  <li key={id}>{`${first_name} ${last_name}`}</li>
);

function Players() {
  const [search, setSearch] = useState('');

  const path = `/players${search && `?search=${search}`}`;
  const players = useFetch(path);

  const inputRef = useRef(null);
  const firstTime = useRef(true);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  useEffect(() => {
    if (firstTime.current) {
      console.log('Acabo de cargar el componente');
      firstTime.current = false;
    }
  });

  return (
    <Loading isLoading={() => !players} loadingText="Loading players...">
      {() => (
        <div>
          <Link to="/">Back</Link>
          <div>
            <label htmlFor="search">
              Search:
              <input
                name="search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                ref={inputRef}
              />
            </label>
          </div>
          <ul>{players.map(renderPlayer)}</ul>
        </div>
      )}
    </Loading>
  );
}

export default Players;
