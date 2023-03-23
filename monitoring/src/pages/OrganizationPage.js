import React from 'react';
import { Link } from 'react-router-dom';

import "./page.css"
const OrganizationPage = (props) => {
    const orgName = props.location.state.orgName;
  return (
    <div>
        <h1>Welcome to {orgName}</h1>
        
      <div>
        <h3>Configuration</h3>
        <Link to="/configuration-status">Check Configuration Status</Link>
      </div>
      <div>
        <h3>Health Check</h3>
        <Link to="/health-status">Check Health Status</Link>
      </div>
      <div>
        <h3>Agent Status</h3>
        <Link to="/agent-status">Check Agent Status</Link>
      </div>
    </div>
  );
};

export default OrganizationPage;
