import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  HashRouter as Router} from 'react-router-dom';
import { Link } from 'react-router-dom';

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
       let location = '/location/'
       return (
           <Router>
           <div className="mapMarkers">
               <Marker
                    position={{
                        lat: Number(this.props.location.latitude),
                        lng: Number(this.props.location.longitude)
                    }}
                    onClick={()=>
                        this.infoWindow()
                    }
               />
                {this.state.window ?
                    <InfoWindow key={this.props.location.id}
                        position={{
                            lat: Number(this.props.location.latitude),
                            lng: Number(this.props.location.longitude)
                        }}
                        onCloseClick={{
                        }}
                        icon={{
                            fillOpacity: 1.0,
                            strokeWeight: 0,
                            scale: 1.25,
                        }}
                    >
                        <div
                            className="infoWindow"
                            style={{
                                background: `white`,
                                padding: 0,
                                margin: 0,
                                textAlign: "left"
                            }}>
                            <h2>{this.props.location.name}</h2>
                            {/* <h3 onClick={()=>this.handleInfoPush(this.props.location.id)}>Click here for more info</h3> */}
                            <Link to={location + this.props.location.id}><h3>Click here for more info</h3></Link>

                        </div>
                    </InfoWindow>
                    :
                    ""
                }
           </div>
           </Router>
       )
   }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(MapMarkers);