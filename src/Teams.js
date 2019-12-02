import React from 'react';
import { Link } from 'react-router-dom';
import withFetch from './withFetch';
import withProps from './withProps';
import compose from './compose';

const renderTeam = ({ id, full_name }) => <li key={id}>{full_name}</li>;

export function Teams(props) {
  const { teams } = props;
  if (!teams) return <div>Loading...</div>;
  return (
    <div style={{ color: props.color }}>
      <Link to="/">Back</Link>
      <ul>{teams.map(renderTeam)}</ul>
    </div>
  );
}

export default compose(
  withFetch('https://www.balldontlie.io/api/v1/teams'),
  withProps(props => ({ teams: props.data })),
)(Teams);

// f(g(x))
// compose
// compose(f, g)(x) = f(g(x))
