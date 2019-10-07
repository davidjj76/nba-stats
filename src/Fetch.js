import { Component } from 'react';

export default class Fetch extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    const { url } = this.props;
    fetch(url)
      .then(response => response.json())
      .then(results => this.setState({ data: results.data }));
  }

  render() {
    const { children } = this.props;
    const { data } = this.state;
    return children(data);
  }
}
