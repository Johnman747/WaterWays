import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, withRouter } from 'react-router-dom';

class ModerateLocation extends Component {

    // Mounts getLocation on pageload.
    componentDidMount() {
        this.getLocations();
    } // end componentDidMount

    // Calls locations to be passed down to MapMarkers component
    getLocations = () => {
        this.props.dispatch({ type: 'FETCH_LOCATIONS' })
    } // end getLocations

    editLocation = (id) => {
        console.log('Click Location #', id);
        this.props.history.push(`/ModerateSingleLocation/${id}`)
    }

    render() {
        return (
            <Router>
                <div className="moderateLocation">
                    <h1>Moderate Locations:</h1>
                    <p>Moderate locations based on community guidlines.</p>
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
                                    <td><button onClick={()=> this.editLocation(location.id)}>Approved</button></td>
                                </tr>
                            ) : (
                                    <tr key={location.id}>
                                        <td>{location.name}</td>
                                        <td><button onClick={()=> this.editLocation(location.id)}>Not Approved</button></td>
                                    </tr>
                                )
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
export default withRouter(connect(mapStateToProps)(ModerateLocation));