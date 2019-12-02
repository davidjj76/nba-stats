import React from 'react';

export default function withLoading(WrappedComponent) {
  function WithLoading(props) {
    if (!props.data) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  }

  return WithLoading;
}
