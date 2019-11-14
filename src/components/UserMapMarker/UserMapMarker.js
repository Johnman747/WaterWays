import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  HashRouter as Router, withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';
import CurrentLocation from '../Icons/CurrantLocationIcon.png'
import "./UserMapMarker.css";

import {
    Marker, InfoWindow
} from '@react-google-maps/api';

class MapMarkers extends Component {

    state = {
        window: false
    }

    infoWindow = () => {
        this.setState({
            window: !this.state.window
        })
        console.log('Click Pin')
    }

    handleInfoPush = (id) => {
        console.log('Push to location details', id);
        this.props.history.push(`/location/${id}`)
    }

   render () {
       return (
           <Router>
           <div className="mapMarkers">
               <Marker 
                    position={{
                        lat: this.props.initialCenter.latitude,
                        lng: this.props.initialCenter.longitude
                    }}   
                    icon={{CurrentLocation}}
                    />  
           </div>
           </Router>
       )
   }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(MapMarkers);