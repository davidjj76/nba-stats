import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import withFetch from './withFetch';

class Players extends Component {
  renderPlayer = ({ id, first_name, last_name }) => (
    <li key={id}>{`${first_name} ${last_name}`}</li>
  );

  render() {
    const { data: players } = this.props;
    if (!players) return <div>Loading...</div>;
    return (
      <div>
        <Link to="/">Back</Link>
        <ul>{players.map(this.renderPlayer)}</ul>
      </div>
    );
  }
}

export default withFetch('https://www.balldontlie.io/api/v1/players')(Players);
