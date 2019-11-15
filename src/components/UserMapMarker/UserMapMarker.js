import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  HashRouter as Router} from 'react-router-dom';
import {  HashRouter as Router, withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';
import CurrentLocation from '../Icons/CurrantLocationIconSmall.png'
import "./UserMapMarker.css";

import {
    Marker
} from '@react-google-maps/api';

class UserMapMarker extends Component {

    state = {
        window: false
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

                    onCloseClick={{
                    }}

                    icon={CurrentLocation}
                    />  
           </div>
           </Router>
       )
   }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(UserMapMarker);