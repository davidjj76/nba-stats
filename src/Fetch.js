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
    const { data } = this.state;
    return this.props.render(data);
  }
}
