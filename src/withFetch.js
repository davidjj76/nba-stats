import React, { Component } from 'react';

const withFetch = url => WrappedComponent => {
  class WithFetch extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
      };
    }

    componentDidMount() {
      fetch(url)
        .then(response => response.json())
        .then(results => this.setState({ data: results.data }));
    }

    render() {
      const newProps = {
        data: this.state.data,
      };
      return <WrappedComponent {...this.props} {...newProps} />;
    }
  }
  return WithFetch;
};

export default withFetch;
