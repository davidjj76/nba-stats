import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Players extends Component {
  constructor() {
    super();
    this.state = {
      players: null,
    };
  }

  componentDidMount() {
    fetch('https://www.balldontlie.io/api/v1/players?per_page=30')
      .then(response => response.json())
      .then(results => this.setState({ players: results.data }));
  }

  renderPlayer = ({ id, first_name, last_name }) => (
    <li key={id}>{`${first_name} ${last_name}`}</li>
  );

  render() {
    const { players } = this.state;
    if (!players) return <div>Loading...</div>;
    return (
      <div>
        <Link to="/">Back</Link>
        <ul>{players.map(this.renderPlayer)}</ul>
      </div>
    );
  }
}
