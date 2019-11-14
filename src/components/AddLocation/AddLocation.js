import React, { Component } from 'react';
import { connect } from 'react-redux';
import UploadImage from './UploadImage';
import Stepper from './Stepper';
import TextField from '@material-ui/core/TextField/TextField';
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
            <h1>Add Locations</h1>
            <TextField
              id="filled-name"
              label="Name"
              value={this.state.name}
              onChange={(event) => this.handleChangeInput(event, 'name')}
              margin="normal"
              variant="filled"
            /><br />
            <TextField
              id="filled-name"
              label="Description"
              value={this.state.name}
              onChange={(event) => this.handleChangeInput(event, 'description')}
              margin="normal"
              variant="filled"
            /><br />
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
            <h1>Add Address</h1>
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
            {/* <label>Address</label><br />
            <input onChange={(event) => this.handleChange(event, 'address')}></input><br /> */}
          </>
        }
        <Stepper handleNext={this.handleNext} handleBack={this.handleBack} handleReset={this.handleReset} handleSubmit={this.addNewLocation} />
      </div>
    )
  }
}

const mapStateToProps = reduxStore => ({
  reduxStore
});
export default connect(mapStateToProps)(AddLocation);