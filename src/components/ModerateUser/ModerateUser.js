import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, withRouter } from 'react-router-dom';

import LogOutButton from '../LogOutButton/LogOutButton';


// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

class ModerateUser extends Component {

    // Mounds get call on page load
    componentDidMount() {
        // this.getAllUser();
    } // end componentDidMount

    // Calls all users information on pageload.
    getAllUser = () => {
        // this.props.dispatch({ type: 'FETCH_ALL_USER' })
    } // end getAll Users

  render() {
    return (
      <Router>
        <div className="moderateUser">
            <h1>Moderate Users:</h1>
            <p>Moderate users based on community guidlines.</p>
            
        </div>
      </Router>
    )
  }
}
const mapStateToProps = (reduxStore) => ({
  reduxStore
});
export default withRouter(connect(mapStateToProps)(ModerateUser));