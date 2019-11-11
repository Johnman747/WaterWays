import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import {
    GoogleMap,
    LoadScript,
} from '@react-google-maps/api';

class MapHome extends Component {
    
    
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
                            height: "100vh",
                            width: "auto"
                        }}
                        zoom={10}
                        center={{
                            lat: 44.9746234,
                            lng: -93.2685388,
                        }}
                    >

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
export default connect(mapStateToProps)(MapHome);