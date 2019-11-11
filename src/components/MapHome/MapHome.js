import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, withRouter } from 'react-router-dom';
import MapMarkers from '../MapMarkers/MapMarkers';

import {
    GoogleMap,
    LoadScript,
} from '@react-google-maps/api';
import AddPage from '../AddLocation/AddLocation';

class MapHome extends Component {
    
    // Mounts getLocation on pageload.
    componentDidMount() {
        this.getLocations();
    } // end componentDidMount

    // Calls locations to be passed down to MapMarkers component
    getLocations = () => {
        this.props.dispatch({ type: 'FETCH_LOCATIONS' })
    } // end getLocations

    render() {
    return(
        <Router>
            <div className="mapHomeComponent">
                <LoadScript
                    id="script-loader"
                    googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}
                    >
                    <GoogleMap
                        className="mainMap"
                        mapContainerStyle={{
                            height: "89.5vh",
                            width: "auto"
                        }}
                        zoom={10}
                        center={{
                            lat: 44.9746234,
                            lng: -93.2685388,
                        }}
                    >
                        {this.props.reduxStore.locationsReducer.map((location) => {
                            return (
                                <MapMarkers location={location} />
                            )
                        })}
                    </GoogleMap>
                </LoadScript>
            </div>
        </Router>
    )
    }
 }

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default withRouter(connect(mapStateToProps)(MapHome));