import React from 'react';
import getDisplayName from './getDisplayName';

export default function withLoading(WrappedComponent) {
  function WithLoading(props) {
    if (!props.data) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  }
  WithLoading.displayName = `WithLoading(${getDisplayName(WrappedComponent)})`;

  return WithLoading;
}
