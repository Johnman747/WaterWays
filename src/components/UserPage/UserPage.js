import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, withRouter } from 'react-router-dom';

import LogOutButton from '../LogOutButton/LogOutButton';

class UserPage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <div className="userPage">
          <h1>Water Ways</h1>
          <h2>User Information</h2>
          <p>User ID: {this.props.reduxStore.user.id}</p>
          <p>Username: {this.props.reduxStore.user.username}</p>
          <p>First Name: {this.props.reduxStore.user.first_name}</p>
          <p>Last Name: {this.props.reduxStore.user.last_name}</p>
          <p>Email: </p>
          <br />
          <button onClick={()=>this.props.history.push('/ModerateLocation')}>Location Approval</button>
          <br />
          <br />
          <button onClick={()=>this.props.history.push('/ModerateUser')}>Moderate Users</button>
          <br />
          <br />
          <LogOutButton className="log-in" />
        </div>
      </Router>
    )
  }
}
const mapStateToProps = (reduxStore) => ({
  reduxStore
});
export default withRouter(connect(mapStateToProps)(UserPage));