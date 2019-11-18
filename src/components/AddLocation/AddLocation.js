import React, { Component } from 'react';
import { connect } from 'react-redux';
import UploadImage from './UploadImage';
import Stepper from './Stepper';
import TextField from '@material-ui/core/TextField/TextField';
import mapStyles from '../MapHome/MapStyles'
import {
  GoogleMap,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import './AddLocation.css'
import Addtags from './Addtags';

class AddLocation extends Component {
  state = {
    locationToAdd: {
      name: '',
      address: '',
      latitude: 0,
      longitude: 0,
      created_by: this.props.reduxStore.user.id,
      free: false,
      spigot: false,
      trail_access: false,
      road_access: false,
      campground_access: false,
      free_flowing: false,
      artesian_well: false,
      RV: false,
      photo: '',
      description: '',
      trail_water_source: false,
      dirt_road_access: false,
      dirt_trail_access: false,

    },
    step: 0
  }
  componentDidMount(){
    this.props.dispatch({type:'ADD_TO_HISTORY', payload: this.props.history.location.pathname})

  }

  handleChange = (boolean, propertyName) => {
    this.setState({
      locationToAdd: {
        ...this.state.locationToAdd,
        [propertyName]: !boolean,
      }
    });
  } // end handleChange

  handleChangeInput = (e, propertyName) => {
    this.setState({
      locationToAdd: {
        ...this.state.locationToAdd,
        [propertyName]: e.target.value,
      }
    });
    console.log(this.state)
  } // end handleChange

  handleImage = (imageUrl) => {
    this.setState({
      locationToAdd: {
        ...this.state.locationToAdd,
        photo: imageUrl
      }
    })
  }

  addNewLocation = () => {
    console.log('booyah')
    this.props.dispatch({ type: 'POST_LOCATIONS', payload: this.state.locationToAdd })
  } // end addNewLocation

  handleNext = () => {
    this.setState({
      step: this.state.step + 1
    })
  }
  handleBack = () => {
    this.setState({
      step: this.state.step - 1
    })
  }

  handleReset = () => {
    this.setState({
      step: 0
    })
  }

  setMarker = (e)=>{

    this.setState({
      locationToAdd:{
        ...this.state.locationToAdd,
        latitude: e.lat,
        longitude: e.lng
      }
    })
  }
  render() {
    return (
      <div className="AddLocation">
        {this.state.step === 0 &&
          <>
          <div className='addTitle'>
            <h2 className='addh2'>Add a Water Source</h2>
          </div>
          <div className='addTextField'>
          <h3 className='addh3'>Name the Water Source</h3>
          <p>If the source doesn't have an official name, make the name clear and relevant to its location.</p>
           
            <TextField
              id="filled-name"
              label="Name"
              value={this.state.name}
              onChange={(event) => this.handleChangeInput(event, 'name')}
              margin="normal"
              variant="outlined"
              fullWidth='true'
            /><br />
            
            <h3 className='addh3'>Write a Description</h3>
            <p>Tell other users about the water source: what it is, what to look for, etc.</p>
            <TextField
              id="filled-name"
              label="Description"
              value={this.state.name}
              onChange={(event) => this.handleChangeInput(event, 'description')}
              margin="normal"
              variant="outlined"
              fullWidth='true'
              multiline='true'
              rows='4'
            /><br />
            </div>
            <label>
              <UploadImage setImage={this.handleImage} />
            </label>
          </>
        }
        {this.state.step === 1 &&
          <Addtags locationToAdd={this.state.locationToAdd} handleChange={this.handleChange}/>
        }
        {this.state.step === 2 &&
          <>
          <div className='addAddressTitle'>
            <h2 className='addh2'>Add Address</h2>
          </div>
          <div className="mapSpacer">
            <h4>Tap map to drop a pin</h4>
          </div>
            <div className="mapAddComponet">
              <LoadScript
                id="script-loader"
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}
              >
                <GoogleMap
                  className="mainMap"
                  mapContainerStyle={{
                    height: "50vh",
                    width: "auto"
                  }}
                  zoom={15}
                  center={{
                    lat: 44.9746234,
                    lng: -93.2685388,
                  }}
                  onClick={(e)=> this.setMarker(e.latLng.toJSON())}
                  mapTypeId="hybrid"
                  options={{
                    "zoomControl": true,
                    "mapTypeControl": false,
                    "scaleControl": false,
                    "streetViewControl": false,
                    "rotateControl": false,
                    "fullscreenControl": false,
                    styles: mapStyles}}
                  >
                  <Marker
                  draggable
                    position={{
                      lat:this.state.locationToAdd.latitude,
                      lng:this.state.locationToAdd.longitude
                    }}
                    onDragEnd={(e)=> this.setMarker(e.latLng.toJSON())}
                    />
                </GoogleMap>
              </LoadScript>
            </div>
            <div className="mapSpacer"></div>
            {/* <label>Address</label><br />
            <input onChange={(event) => this.handleChange(event, 'address')}></input><br /> */}
          </>
        }
        <Stepper handleNext={this.handleNext} handleBack={this.handleBack} handleReset={this.handleReset} handleSubmit={this.addNewLocation} />
        <div className="navSpacer"></div>
      </div>
    )
  }
}

const mapStateToProps = reduxStore => ({
  reduxStore
});
export default connect(mapStateToProps)(AddLocation);