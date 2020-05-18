import React from 'react';

export default class Fetch extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(results => this.setState({ data: results.data }));
  }

  render() {
    return this.props.children(this.state.data);
    // return this.props.render(this.state.data);
  }
}
