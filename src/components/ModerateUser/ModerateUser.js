import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, withRouter } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, blue } from '@material-ui/core/colors';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
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

    // Mounds get call on page load
    componentDidMount() {
        this.getAllUser();
    } // end componentDidMount

    // Calls all users information on pageload.
    getAllUser = () => {
        this.props.dispatch({ type: 'FETCH_ALL_USER' })
    } // end getAll Users

    handleDelete = (user) => {
        console.log('Delete');
        this.props.dispatch({ type: 'DELETE_USER', payload: user })
    }
    handleBack = () => {
        this.props.history.push('/user')
    }
    render() {
        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <div className="moderateUserPage">
                        <div className="moderateUserHeader">
                            <h1><ArrowBackIosIcon onClick={this.handleBack} className="moderateUserArrow" fontSize="medium"/><span>Moderate Users</span></h1>
                        </div>
                        <Table className="userTable" align="center">
                            <TableHead className="userTHead">
                                <TableRow>
                                    <th>ID#</th>
                                    <th>Username</th>
                                    <th>Name</th>
                                    <th>Active?</th>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.props.reduxStore.allUserReducer.map(user =>
                                        <TableRow key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.username}</td>
                                            <td>{user.first_name}</td>
                                            <td onClick={() => this.handleDelete(user)} size="small">
                                                {user.status === 'active' ? (<Button color="primary" variant="contained">Active</Button>) : (<Button color="secondary" variant="contained">Deleted</Button>)}
                                            </td>
                                        </TableRow>
                                    )}
                            </TableBody>
                        </Table>
                    </div>
                </MuiThemeProvider>

            </Router>
        )
    }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default withRouter(connect(mapStateToProps)(ModerateUser));