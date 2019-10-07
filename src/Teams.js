import React from 'react';
import { Link } from 'react-router-dom';

import useFetch from './useFetch';
import Loading from './Loading';

const renderTeam = ({ id, full_name }) => <li key={id}>{full_name}</li>;

function Teams() {
  const teams = useFetch('https://www.balldontlie.io/api/v1/teams');
  return (
    <Loading isLoading={() => !teams} loadingText="Loading teams...">
      {() => (
        <div>
          <Link to="/">Back</Link>
          <ul>{teams.map(renderTeam)}</ul>
        </div>
      )}
    </Loading>
  );
}

export default Teams;
