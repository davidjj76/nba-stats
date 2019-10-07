import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Teams extends Component {
  constructor() {
    super();
    this.state = {
      teams: null,
    };
  }

  componentDidMount() {
    fetch('https://www.balldontlie.io/api/v1/teams')
      .then(response => response.json())
      .then(results => this.setState({ teams: results.data }));
  }

  renderTeam = ({ id, full_name }) => <li key={id}>{full_name}</li>;

  render() {
    const { teams } = this.state;
    if (!teams) return <div>Loading...</div>;
    return (
      <div>
        <Link to="/">Back</Link>
        <ul>{teams.map(this.renderTeam)}</ul>
      </div>
    );
  }
}
