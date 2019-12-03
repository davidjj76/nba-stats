import React from 'react';
import { Link } from 'react-router-dom';
import withFetch from './withFetch';
import withProps from './withProps';
import withLoading from './withLoading';
import Fetch from './Fetch';
import useFetch from './useFetch';

import compose from './compose';

const renderTeam = ({ id, full_name }) => <li key={id}>{full_name}</li>;

export default function Teams(props) {
  const { isFetching, data: teams, error } = useFetch(
    'https://www.balldontlie.io/api/v1/teams',
  );
  console.log(isFetching, teams);
  return (
    teams && (
      <div style={{ color: props.color }}>
        <Link to="/">Back</Link>
        <ul>{teams.map(renderTeam)}</ul>
      </div>
    )
  );
}

// export default compose(
//   withFetch('https://www.balldontlie.io/api/v1/teams'),
//   withLoading,
//   withProps(props => ({ teams: props.data })),
// )(Teams);

// f(g(x))
// compose
// compose(f, g)(x) = f(g(x))
