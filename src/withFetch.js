import React from 'react';

export default function withFetch(url) {
  return function (WrappedComponent) {
    class WithFetch extends React.Component {
      constructor() {
        super();
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
        return <WrappedComponent {...this.props} {...this.state} />;
      }
    }
    return WithFetch;
  };
}
