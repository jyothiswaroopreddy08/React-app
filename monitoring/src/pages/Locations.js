import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

//import axios from 'axios';
import './Locations.css' 

const Locations = () => {
  // const [locations, setLocations] = useState([]);

  const [selectedOrg, setSelectedOrg] = useState('');

  const history = useHistory();

  const handleOrgChange = (e) => {
    // const selectedOrg = e.target.value;
    // setSelectedOrg(selectedOrg);
    setSelectedOrg(e.target.value);
    // if (selectedOrg) {
    //   history.push(`/locations/${selectedOrg}`);
    // }
  };

  const handleOrgSubmit = (e) => {
    e.preventDefault();
    history.push(`/dashboard/${selectedOrg}`);
  };

  // const handleLocationsSelect = (locationsId) => {
  //   console.log(`Selected locations ${locationsId}`);
  // };

  return (
    <div className="container">
      <form onSubmit={handleOrgSubmit}>
    <div>
          <label htmlFor="org">Choose your organization:</label>
          {/* <select id="org" value={selectedOrg} onChange={(e) => setSelectedOrg(e.target.value)}> */}
          <select id="org" value={selectedOrg} onChange={handleOrgChange}>
            <option value="Select">Select option</option>
            <option value="TCAS">TCAS</option>
            <option value="TCAS_BRA">TCAS_BRA</option>
            <option value="TCAS_POR">TCAS_POR</option>
            <option value="TCAS_SA">TCAS_SA</option>
            <option value="TCAS_TUR">TCAS_TUR</option>
          </select>
        </div>
        <button className="login-btn" type="submit">Submit</button>
        {/* <div>
        <button onClick={() => history.push('/')}>Go back to login</button>
        </div> */}
        </form>
        </div>
  );
};

export default Locations;



