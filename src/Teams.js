import React from 'react';
import { Link } from 'react-router-dom';

import Fetch from './Fetch';
import Loading from './Loading';

const renderTeam = ({ id, full_name }) => <li key={id}>{full_name}</li>;

function Teams() {
  return (
    <Fetch url="https://www.balldontlie.io/api/v1/teams">
      {teams => (
        <Loading isLoading={() => !teams} loadingText="Loading teams...">
          {() => (
            <div>
              <Link to="/">Back</Link>
              <ul>{teams.map(renderTeam)}</ul>
            </div>
          )}
        </Loading>
      )}
    </Fetch>
  );
}

export default Teams;
