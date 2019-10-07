import React from 'react';
import { Link } from 'react-router-dom';

import compose from './compose';
import withFetch from './withFetch';
import withProps from './withProps';
import withLoading from './withLoading';

const renderPlayer = ({ id, first_name, last_name }) => (
  <li key={id}>{`${first_name} ${last_name}`}</li>
);

function Players({ players }) {
  return (
    <div>
      <Link to="/">Back</Link>
      <ul>{players.map(renderPlayer)}</ul>
    </div>
  );
}

export default compose(
  withFetch('https://www.balldontlie.io/api/v1/players'),
  withProps(props => ({
    players: props.data,
  })),
  withLoading({
    loadingText: 'Loading players...',
    isLoading: props => !props.players,
  }),
)(Players);
