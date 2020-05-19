import React from 'react';
import { Link } from 'react-router-dom';

// import Fetch from './Fetch';
import useFecth from './useFetch';

function Teams() {
  const renderTeam = ({ id, full_name }) => <li key={id}>{full_name}</li>;

  const teams = useFecth('teams');

  if (!teams) return <div>Loading...</div>;
  return (
    <div>
      <Link to="/">Back</Link>
      <ul>{teams.map(renderTeam)}</ul>
    </div>
  );
}

export default Teams;
