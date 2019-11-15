import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, withRouter } from 'react-router-dom';
import MapMarkers from '../MapMarkers/MapMarkers';
import {createBrowserHistory} from 'history';

import {
    GoogleMap,
    LoadScript,
} from '@react-google-maps/api';


class MapHome extends Component {
    state = {
        lastUrl: null,
        locations: []
    }
    // Mounts getLocation on pageload.
    componentDidMount() {
        // this.lastURL();
        this.getLocations();
    } // end componentDidMount

    // Calls locations to be passed down to MapMarkers component
    getLocations = () => {
        console.log('HISTORY XXXXXX ', this.props.history.location.pathname)
        this.props.dispatch({ type: 'FETCH_LOCATIONS' });
        this.setLocations();
    } // end getLocations
    setLocations = ()=>{
        let array = []
    // console.log(this.state.lastUrl)
    if(this.state.lastUrl !== '/searchFilter'){
        this.props.reduxStore.locationsReducer.map(location =>
                array.push(location) 
            )
    }else{
        this.props.reduxStore.filteredLocationsReducer.map(location =>
            array.push(location) 
        )
    }
        this.setState({
            ...this.state,
            locations: array
        })     
    }
    // lastURL = () => {
        
    //     // this.setState({
    //     //     lastUrl: this.props.history
    //     // })
    // }//tracks last url visited within the app
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
                        {this.state.locations.map((location) => {
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