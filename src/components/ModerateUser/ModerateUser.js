import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, withRouter } from 'react-router-dom';

class ModerateUser extends Component {

    // Mounds get call on page load
    componentDidMount() {
        this.getAllUser();
    } // end componentDidMount

    // Calls all users information on pageload.
    getAllUser = () => {
        this.props.dispatch({ type: 'FETCH_ALL_USER' })
    } // end getAll Users

    handleDelete = (id) => {
        console.log('Delete');
        this.props.dispatch({ type: 'DELETE_USER', payload: id })
    }

    render() {
        return (
            <Router>
                <div className="moderateUser">
                    <h1>Moderate Users:</h1>
                    <p>Moderate users based on community guidlines.</p>
                    <table className="userTable">
                        <thead className="userTHead">
                            <tr>
                                <th>User Id</th>
                                <th>Username</th>
                                <th>First Name</th>
                                <th>Delete User</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.reduxStore.allUserReducer.map(user =>
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.username}</td>
                                        <td>{user.first_name}</td>
                                        <td><button onClick={() => this.handleDelete(user.id)}>Delete</button></td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </Router>
        )
    }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default withRouter(connect(mapStateToProps)(ModerateUser));