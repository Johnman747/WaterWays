import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';


import LogOutButton from '../LogOutButton/LogOutButton';

class UserPage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <div className="userPage">
          <h2 className="userTitle">User Page</h2>
          <div className="userInfo">
          <h3>User ID: {this.props.reduxStore.user.id}</h3>
          <h3>Username: {this.props.reduxStore.user.username}</h3>
          <h3>First Name: {this.props.reduxStore.user.first_name}</h3>
          <h3>Last Name: {this.props.reduxStore.user.last_name}</h3>
          <h3>Email: </h3>
          </div>
          <br />
          <div className="userPageButtons">
          <Button  fullWidth="true" variant="contained" color="primary" onClick={()=>this.props.history.push('/ModerateLocation')}>Location Approval</Button>
          <br />
          <br />
          <Button  fullWidth="true" variant="contained" onClick={()=>this.props.history.push('/ModerateUser')}>Moderate Users</Button>
          </div>
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