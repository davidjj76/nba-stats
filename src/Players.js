import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useFecth from './useFetch';

const renderPlayer = ({ id, first_name, last_name }) => (
  <li key={id}>{`${first_name} ${last_name}`}</li>
);

function Players() {
  const [search, setSearch] = useState('');

  const url = `players${search && `?search=${search}`}`;
  const players = useFecth(url);

  const inputRef = useRef(null);
  const firstTime = useRef(true);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  useEffect(() => {
    if (firstTime.current) {
      console.log('First render');
      firstTime.current = false;
    }
  });

  if (!players) return <div>Loading...</div>;
  return (
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
  );
}

export default Players;
