import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, withRouter } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, blue } from '@material-ui/core/colors';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './ModerateUser.css'

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: red
    },
    typography: {
        useNextVariants: true,
    },
});

class ModerateUser extends Component {
    state = {
        user: {
            user_id: 0,
            admin_level: 0,
        },
        toggle: false,
    }

    // Mounds get call on page load
    componentDidMount() {
        this.getAllUser();
    } // end componentDidMount

    // Calls all users information on pageload.
    getAllUser = () => {
        this.props.dispatch({ type: 'FETCH_ALL_USER' })
    } // end getAll Users

    handleUpdate = (user) => {
        console.log('Delete');
        this.props.dispatch({ type: 'DELETE_USER', payload: user })
    }
    handleBack = () => {
        this.props.history.push('/user')
    }
    handleUpdateAdminLevel = (user) => {
        this.props.dispatch({ type: 'CHANGE_ADMIN_LEVEL', payload: user })
    }

    handelChange = (user, e) => {
        this.setState({
            user: {
                admin_level: e.target.value,
                user_id: user.id
            }
        })
    }
    render() {
        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <div className="moderateUserPage">
                        <div className="moderateUserHeader">
                            <h1><ArrowBackIosIcon onClick={this.handleBack} className="moderateUserArrow" fontSize="medium" /><span>Moderate Users</span></h1>
                        </div>
                        <Table className="userTable" align="center">
                            <TableHead className="userTHead">
                                <TableRow>
                                    <th>ID#</th>
                                    <th>Username</th>
                                    <th>Name</th>
                                    <th>Admin Level</th>
                                    <th>Active?</th>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.props.reduxStore.allUserReducer.map(user =>
                                        <TableRow key={user.id}>
                                            <td onChange={() => this.setState({ user_id: user.id })}>{user.id}</td>
                                            <td>{user.username}</td>
                                            <td>{user.first_name}</td>
                                            {!this.state.toggle ?
                                                <td onClick={() => { this.setState({ toggle: true }) }}>{user.admin_level}</td>
                                                :
                                                <td>
                                                    <form onSubmit={() => this.handleUpdateAdminLevel(user)}>
                                                        <select defaultValue={user.admin_level} onChange={(e) => this.handelChange(user, e)}>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                        </select>
                                                        <input type="submit" value="Submit" />
                                                    </form>
                                                </td>

                                            }
                                            <td onClick={() => this.handleUpdate(user)} size="small">
                                                {user.status === 'active' ? (<Button color="primary" variant="contained">Active</Button>) : (<Button color="secondary" variant="contained">Deleted</Button>)}
                                            </td>
                                        </TableRow>
                                    )}
                            </TableBody>
                        </Table>
                    </div>
                    <div className="navSpacer"></div>
                </MuiThemeProvider>

            </Router>
        )
    }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default withRouter(connect(mapStateToProps)(ModerateUser));