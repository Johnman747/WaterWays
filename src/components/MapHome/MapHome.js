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
    state = { userLocation: { latitude: 32, longitude: 32 }, loading: true };

    componentDidMount(props) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
  
          this.setState({
            userLocation: { latitude: latitude, longitude: longitude },
            loading: false
          });
        },
        () => {
          this.setState({ loading: false });
        }
      );

      this.getLocations();
    }
    // Calls locations to be passed down to MapMarkers component
    getLocations = () => {
        this.props.dispatch({ type: 'FETCH_LOCATIONS' })
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
                            lat: this.state.userLocation.latitude,
                            lng: this.state.userLocation.longitude,
                        }}
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