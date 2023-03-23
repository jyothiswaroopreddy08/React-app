import React from 'react';
import { useParams } from 'react-router-dom';

const HealthCheck = () => {
  const { status } = useParams();
  
  return (
    <div>
      <h1>Status: {status}</h1>
    </div>
  );
};

export default HealthCheck;
