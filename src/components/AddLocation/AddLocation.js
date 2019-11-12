import React, { Component } from 'react';
import { connect } from 'react-redux';
import UploadImage from './UploadImage';
import Stepper from './Stepper';
import TextField from '@material-ui/core/TextField';
import {
  GoogleMap,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import './AddLocation.css'

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
    },
    step: 0
  }

  handleChange = (event, propertyName) => {
    this.setState({
      locationToAdd: {
        ...this.state.locationToAdd,
        [propertyName]: event.target.value,
      }
    });
    console.log(this.state.locationToAdd)
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
              onChange={(event) => this.handleChange(event, 'name')}
              margin="normal"
              variant="filled"
            /><br />
            <TextField
              id="filled-name"
              label="Description"
              value={this.state.name}
              onChange={(event) => this.handleChange(event, 'description')}
              margin="normal"
              variant="filled"
            /><br />
            <label>
              <UploadImage setImage={this.handleImage} />
            </label>
          </>
        }
        {this.state.step === 1 &&
          <>
            <h1>Add Tags</h1>
            <label>Free To Fill?</label><br />
            <select defaultValue='false' onChange={(event) => this.handleChange(event, 'free')}>
              <option value='true' selected='selected'>Yes</option>
              <option value='false' selected='selected'>No</option>
            </select><br />
            <label>Spigot Available?</label><br />
            <select defaultValue='false' onChange={(event) => this.handleChange(event, 'spigot')}>
              <option value='true' selected='selected'>Yes</option>
              <option value='false' selected='selected'>No</option>
            </select><br />
            <label>Trail Access?</label><br />
            <select defaultValue='false' onChange={(event) => this.handleChange(event, 'trail_access')}>
              <option value='true' selected='selected'>Yes</option>
              <option value='false' selected='selected'>No</option>
            </select><br />
            <label>Road Access</label><br />
            <select defaultValue='false' onChange={(event) => this.handleChange(event, 'road_access')}>
              <option value='true' selected='selected'>Yes</option>
              <option value='false' selected='selected'>No</option>
            </select><br />
            <label>Campground Access</label><br />
            <select defaultValue='false' onChange={(event) => this.handleChange(event, 'campground_access')}>
              <option value='true' selected='selected'>Yes</option>
              <option value='false' selected='selected'>No</option>
            </select><br />
            <label>Free FLowing</label><br />
            <select defaultValue='false' onChange={(event) => this.handleChange(event, 'free_falling')}>
              <option value='true' selected='selected'>Yes</option>
              <option value='false' selected='selected'>No</option>
            </select><br />
            <label>Artesian</label><br />
            <select defaultValue='false' onChange={(event) => this.handleChange(event, 'artesian_well')}>
              <option value='true' selected='selected'>Yes</option>
              <option value='false' selected='selected'>No</option>
            </select><br />
            <label>RV Access</label><br />
            <select defaultValue='false' onChange={(event) => this.handleChange(event, 'RV')}>
              <option value='true' selected='selected'>Yes</option>
              <option value='false' selected='selected'>No</option>
            </select>
          </>
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