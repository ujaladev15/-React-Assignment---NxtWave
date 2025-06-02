import React from 'react';

const Error = ({ onRetry }) => (
  <div>
    <p>Something went wrong.</p>
    <button onClick={onRetry}>Retry</button>
  </div>
);

export default Error;
