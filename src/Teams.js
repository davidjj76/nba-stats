import React from 'react';
import { Link } from 'react-router-dom';

import compose from './compose';
import withFetch from './withFetch';
import withProps from './withProps';
import withLoading from './withLoading';

const renderTeam = ({ id, full_name }) => <li key={id}>{full_name}</li>;

function Teams({ teams }) {
  return (
    <div>
      <Link to="/">Back</Link>
      <ul>{teams.map(renderTeam)}</ul>
    </div>
  );
}

export default compose(
  withFetch('https://www.balldontlie.io/api/v1/teams'),
  withProps(props => ({ teams: props.data })),
  withLoading({
    loadingText: 'Loading teams...',
    isLoading: props => !props.teams,
  }),
)(Teams);
