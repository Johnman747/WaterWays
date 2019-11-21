import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, withRouter } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: red
    },
    typography: {
        useNextVariants: true,
    },
});

class ModerateLocation extends Component {

    // Mounts getLocation on pageload.
    componentDidMount() {
        this.getLocations();
    } // end componentDidMount

    // Calls locations to be passed down to MapMarkers component
    getLocations = () => {
        this.props.dispatch({ type: 'FETCH_LOCATIONS_MODERATE' })
    } // end getLocations

    editLocation = (id) => {
        console.log('Click Location #', id);
        this.props.history.push(`/ModerateSingleLocation/${id}`)
    }
    handleBack = () =>{
        this.props.history.push('/user')
    }
    render() {
        return (
            <Router>
                                <MuiThemeProvider theme={theme}>

                <div className="moderateLocation">
                    <div className="moderateLocationHeader">
                    <h1><ArrowBackIosIcon onClick={this.handleBack}/><span>Moderate Locations:</span></h1>
                    </div>
                    <table className="locationTable">
                        <thead className="locationTHead">
                            <tr>
                                <th>Location Name</th>
                                <th>Approval</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.props.reduxStore.locationsReducer.map(location => location.approve === true ? (
                                <tr key={location.id}>
                                    <td>{location.name}</td>
                                    <td><Button onClick={()=> this.editLocation(location.id)} color="primary" variant="contained">Approved</Button></td>
                                </tr>
                            ) : (
                                    <tr key={location.id}>
                                        <td>{location.name}</td>
                                        <td><Button onClick={()=> this.editLocation(location.id)} color="secondary" variant="contained">Pending</Button></td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>

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
export default withRouter(connect(mapStateToProps)(ModerateLocation));