import React from 'react';

const HigherOrderComponent = (WrappedComponent, additionalStyles) => {
  return (props) => (
    <div style={additionalStyles}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default HigherOrderComponent;
