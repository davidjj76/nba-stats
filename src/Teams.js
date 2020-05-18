import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import withFetch from './withFetch';

class Teams extends Component {
  renderTeam = ({ id, full_name }) => <li key={id}>{full_name}</li>;

  render() {
    const { data: teams } = this.props;
    if (!teams) return <div>Loading...</div>;
    return (
      <div>
        <Link to="/">Back</Link>
        <ul>{teams.map(this.renderTeam)}</ul>
      </div>
    );
  }
}

export default withFetch('https://www.balldontlie.io/api/v1/teams')(Teams);
