import React from 'react';
import { Link } from 'react-router-dom';
import withFetch from './withFetch';

const renderTeam = ({ id, full_name }) => <li key={id}>{full_name}</li>;

function Teams({ data: teams }) {
  if (!teams) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/">Back</Link>
      <ul>{teams.map(renderTeam)}</ul>
    </div>
  );
}

export default withFetch('https://www.balldontlie.io/api/v1/teams')(Teams);
