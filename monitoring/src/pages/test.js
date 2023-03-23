import React from 'react';
import { withRouter } from 'react-router-dom';
import './test.css'
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleOrgChange = this.handleOrgChange.bind(this);
    this.handleReturnToLogin = this.handleReturnToLogin.bind(this);
    
  }
  
  handleOrgChange(event) {
    const orgId = event.target.value;

    // Use history.push() to redirect to the appropriate page based on the selected option
    switch (orgId) {
      case '1':
        // window.location.href = 'https://www.youtube.com';
        this.props.history.push('/TCAS-1', { orgName: 'TCAS' });
        break;
      case '2':
        this.props.history.push('/TCAS_BRA-2', { orgName: 'TCAS_BRA' });
        break;
      case '3':
        this.props.history.push('/TCAS_POR-3', { orgName: 'TCAS_POR' });
        break;
      case '4':
        this.props.history.push('/TCAS_SA-4', { orgName: 'TCAS_SA' });
        break;
      case '5':
        this.props.history.push('/TCAS_TUR-5', { orgName: 'TCAS_TUR' });
        break;
      default:
        break;
    }
  }
  handleReturnToLogin() {
    this.props.history.push('/');
  }

  render() {
    return (
        <div className="container">
      <div>
        <label htmlFor="orgSelect">Choose your organization:</label>
        <select id="orgSelect" onChange={this.handleOrgChange}>
          <option value="">Select an organization</option>
          <option value="1">TCAS</option>
          <option value="2">TCAS_BRA</option>
          <option value="3">TCAS_POR</option>
          <option value="4">TCAS_SA</option>
          <option value="5">TCAS_TUR</option>
        </select>
        <button className="button-container" onClick={this.handleReturnToLogin}>Return to Login</button>
      </div>
      </div>
    );
  }
}

export default withRouter(MyComponent);
