import React from 'react';
import { Link } from 'react-router-dom';
import withFetch from './withFetch';
import withProps from './withProps';
import compose from './compose';

const renderPlayer = ({ id, first_name, last_name }) => (
  <li key={id}>{`${first_name} ${last_name}`}</li>
);

function Players(props) {
  const { players } = props;
  if (!players) return <div>Loading...</div>;
  return (
    <div style={{ color: props.color }}>
      <Link to="/">Back</Link>
      <ul>{players.map(renderPlayer)}</ul>
    </div>
  );
}

export default compose(
  withFetch('https://www.balldontlie.io/api/v1/players?per_page=30'),
  withProps(props => ({ players: props.data })),
)(Players);
