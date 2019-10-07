import React from 'react';

export default function Loading({
  loadingText = 'Loading...',
  isLoading = () => false,
  children,
}) {
  if (isLoading()) {
    return <div>{loadingText}</div>;
  }
  return children();
}
