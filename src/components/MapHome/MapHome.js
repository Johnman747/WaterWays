import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, withRouter } from 'react-router-dom';
import MapMarkers from '../MapMarkers/MapMarkers';
import UserMapMarker from '../UserMapMarker/UserMapMarker'
import {
    GoogleMap,
    LoadScript,
} from '@react-google-maps/api';

class MapHome extends Component {
    state = { userLocation: { latitude: 0, longitude: 0, accuracy:0}, loading: true };

    componentDidMount() {
      this.getLocations();
      this.getGeoLocation();
    }

    //function get current location
    getGeoLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    console.log(position.coords);
                    this.setState(prevState => ({
                        userLocation: {
                            ...prevState.userLocation,
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            accuracy: position.coords.accuracy
                        }
                    }))
                }
            )
        } else {
            console.log('error')
        }
    }
    // Calls locations to be passed down to MapMarkers component
    getLocations = () => {
        this.props.dispatch({ type: 'FETCH_LOCATIONS' })
        console.log(this.state);
        
    } // end getLocations
  
    render() {
        const {userLocation } = this.state;  
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
                            lat: userLocation.latitude,
                            lng: userLocation.longitude,
                        }}
                        options={{"disableDefaultUI": "true"}}
                    >
                    >
                        {this.props.reduxStore.locationsReducer.map(location =>
                                <MapMarkers location={location} />
                        )}
                  <UserMapMarker initialCenter={userLocation}/>
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