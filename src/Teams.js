import React from 'react';
import { Link } from 'react-router-dom';
import withFetch from './withFetch';
import withProps from './withProps';
import withLoading from './withLoading';
import Fetch from './Fetch';

import compose from './compose';

const renderTeam = ({ id, full_name }) => <li key={id}>{full_name}</li>;

const renderFunc = props => teams =>
  teams && (
    <div style={{ color: props.color }}>
      <Link to="/">Back</Link>
      <ul>{teams.map(renderTeam)}</ul>
    </div>
  );

export default function Teams(props) {
  const renderWithProps = renderFunc(props);
  return (
    <Fetch
      url="https://www.balldontlie.io/api/v1/teams"
      render={renderWithProps}
    ></Fetch>
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
