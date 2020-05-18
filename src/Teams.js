import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Fetch from './Fetch';

class Teams extends Component {
  renderTeam = ({ id, full_name }) => <li key={id}>{full_name}</li>;

  render() {
    return (
      <Fetch url="https://www.balldontlie.io/api/v1/teams">
        {teams => {
          if (!teams) return <div>Loading...</div>;
          return (
            <div>
              <Link to="/">Back</Link>
              <ul>{teams.map(this.renderTeam)}</ul>
            </div>
          );
        }}
      </Fetch>
    );
  }
}

export default Teams;
