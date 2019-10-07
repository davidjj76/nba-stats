import React from 'react';

export default function withLoading({
  loadingText = 'Loading...',
  isLoading = () => false,
}) {
  return function(WrappedComponent) {
    function WithLoading(props) {
      if (isLoading(props)) {
        return <div>{loadingText}</div>;
      }
      return <WrappedComponent {...props} />;
    }

    return WithLoading;
  };
}
