import React from 'react';
import getDisplayName from './getDisplayName';

const withProps = transformProps => WrappedComponent => {
  function WithProps(props) {
    const passedProps = transformProps(props);
    return <WrappedComponent {...props} {...passedProps} />;
  }
  WithProps.displayName = `WithProps(${getDisplayName(WrappedComponent)})`;
  return WithProps;
};

export default withProps;
