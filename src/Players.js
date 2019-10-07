import React from 'react';
import { Link } from 'react-router-dom';

import withFetch from './withFetch';

const renderPlayer = ({ id, first_name, last_name }) => (
  <li key={id}>{`${first_name} ${last_name}`}</li>
);

function Players({ data: players }) {
  if (!players) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/">Back</Link>
      <ul>{players.map(renderPlayer)}</ul>
    </div>
  );
}

export default withFetch('https://www.balldontlie.io/api/v1/players')(Players);
