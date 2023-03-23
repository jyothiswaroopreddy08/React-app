import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
//import '../node_modules/bootstrap';
import './App.css';
import Login from './pages/Login.js';
import OrganizationPage from './pages/OrganizationPage';
import Locations from './pages/Locations.js';
import MyComponent from './pages/test.js';
import ConfigurationStatus from './pages/ConfigurationStatus.js';
import HealthCheck from './pages/HealthCheck.js';
import AgentStatus from './pages/AgentStatus.js';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route path="/locations" component={Locations} /> */}
          <Route path="/dashboard" component={MyComponent} />
          <Route exact path="/" component={MyComponent} />
        <Route path="/TCAS-1" component={OrganizationPage} />
        <Route path="/TCAS_BRA-2" component={OrganizationPage} />
        <Route path="/TCAS_POR-3" component={OrganizationPage} />
        <Route path="/TCAS_SA-4" component={OrganizationPage} />
        <Route path="/TCAS_TUR-5" component={OrganizationPage} />
        <Route path="/configuration-status/:status" exact>
          <ConfigurationStatus />
        </Route>
        <Route path="/health-status/:status" exact>
          <HealthCheck />
        </Route>
        <Route path="/agent-status/:status" exact>
          <AgentStatus />
        </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;




