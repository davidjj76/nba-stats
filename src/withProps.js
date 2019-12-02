import React from 'react';

const withProps = transformProps => WrappedComponent => {
  function WithProps(props) {
    const passedProps = transformProps(props);
    return <WrappedComponent {...props} {...passedProps} />;
  }

  return WithProps;
};

export default withProps;
