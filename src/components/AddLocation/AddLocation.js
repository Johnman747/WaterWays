import React, { Component } from 'react';
import { connect } from 'react-redux';
import UploadImage from './UploadImage'

class AddLocation extends Component{
    state = {
      locationToAdd: {
      name : '',
      address : '',
      latittude : 0,
      longitude : 0,
      created_by : this.props.reduxStore.user.id,
      free : false,
      spigot : false,
      trail_access : false,
      road_access : false,
      campground_access : false,
      free_flowing : false,
      artesian_well : false,
      RV: false,
      photo : '',
      description : '',
      }
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

    handleImage = (imageUrl) =>{
      this.setState({
        locationToAdd:{
          ...this.state.locationToAdd,
          photo: imageUrl
        }
      })
    }

    addNewLocation = event => {
        event.preventDefault();
        console.log('booyah')
        this.props.dispatch({ type: 'POST_LOCATIONS', payload: this.state.locationToAdd})
    } // end addNewLocation

    render(){
      return(
        <form onSubmit={this.addNewLocation}>
        <h1>Add Locations</h1>
        <label>Name</label><br/>
        <input onChange={(event)=>this.handleChange(event, 'name')}></input>
        <label>Address</label><br/>
        <input onChange={(event)=>this.handleChange(event, 'address')}></input>
        <label>Latittude</label><br/>
        <input onChange={(event)=>this.handleChange(event, 'latittude')}></input>
        <label>Longitude</label><br/>
        <input onChange={(event)=>this.handleChange(event, 'longitude')}></input>
        <label>Free To Fill?</label><br/>
        <select defaultValue='false' onChange={(event)=>this.handleChange(event, 'free')}>
            <option value='true' selected='selected'>Yes</option>
            <option value='false' selected='selected'>No</option>
        </select><br/>
        <label>Spigot Available?</label><br/>
        <select defaultValue='false' onChange={(event)=>this.handleChange(event, 'spigot')}>
            <option value='true' selected='selected'>Yes</option>
            <option value='false' selected='selected'>No</option>
        </select><br/>
        <label>Trail Access?</label><br/>
        <select defaultValue='false' onChange={(event)=>this.handleChange(event, 'trail_access')}>
            <option value='true' selected='selected'>Yes</option>
            <option value='false' selected='selected'>No</option>
        </select><br/>
        <label>Road Access</label><br/>
        <select defaultValue='false' onChange={(event)=>this.handleChange(event, 'road_access')}>
            <option value='true' selected='selected'>Yes</option>
            <option value='false' selected='selected'>No</option>
        </select><br/>
        <label>Campground Access</label><br/>
        <select defaultValue='false' onChange={(event)=>this.handleChange(event, 'campground_access')}>
            <option value='true' selected='selected'>Yes</option>
            <option value='false' selected='selected'>No</option>
        </select><br/>
        <label>Free FLowing</label><br/>
        <select defaultValue='false' onChange={(event)=>this.handleChange(event, 'free_falling')}>
            <option value='true' selected='selected'>Yes</option>
            <option value='false' selected='selected'>No</option>
        </select><br/>
        <label>Artesian</label><br/>
        <select defaultValue='false' onChange={(event)=>this.handleChange(event, 'artesian_well')}>
            <option value='true' selected='selected'>Yes</option>
            <option value='false' selected='selected'>No</option>
        </select><br/>
        <label>RV Access</label><br/>
        <select defaultValue='false' onChange={(event)=>this.handleChange(event, 'RV')}>
            <option value='true' selected='selected'>Yes</option>
            <option value='false' selected='selected'>No</option>
        </select><br/>
        <label>
          <UploadImage  setImage={this.handleImage}/>
        </label>
        <br/>
        <label>Description</label><br/>
        <input onChange={(event)=>this.handleChange(event, 'description')}></input>
        <button className='addLocationSubmit'>Submit</button>
        </form>
      )
    }
  }
  const mapStateToProps = reduxStore => ({
    reduxStore
  });
  export default connect(mapStateToProps)(AddLocation);