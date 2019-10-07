import React from 'react';

export default function withProps(transformProps) {
  return function(WrappedComponent) {
    function WithProps(props) {
      const passedProps = transformProps(props);
      return <WrappedComponent {...props} {...passedProps} />;
    }

    return WithProps;
  };
}
