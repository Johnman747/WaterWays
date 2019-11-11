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
      photo : '',
      description : ''
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
        // this.props.dispatch({ type: 'POST_LOCATIONS', payload: this.state.locationToAdd})
        // this.props.history.push('/');
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
        <select defaultValue='true' onChange={(event)=>this.handleChange(event, 'free_true')}>
            <option value='true' selected='selected'>Yes</option>
            <option value='false' selected='selected'>No</option>
        </select><br/>
        <label>Spigot Available?</label><br/>
        <select defaultValue='true' onChange={(event)=>this.handleChange(event, 'spigot')}>
            <option value='true' selected='selected'>Yes</option>
            <option value='false' selected='selected'>No</option>
        </select><br/>
        <label>Trail Access?</label><br/>
        <select defaultValue='true' onChange={(event)=>this.handleChange(event, 'trail_access')}>
            <option value='true' selected='selected'>Yes</option>
            <option value='false' selected='selected'>No</option>
        </select><br/>
        <label>Road Access</label><br/>
        <input onChange={(event)=>this.handleChange(event, 'road_access')}></input>
        <label>Campground Access</label><br/>
        <input onChange={(event)=>this.handleChange(event, 'campground_access')}></input>
        <label>Free FLowing</label><br/>
        <input onChange={(event)=>this.handleChange(event, 'free_flowing ')}></input>
        <label>Artesian</label><br/>
        <input onChange={(event)=>this.handleChange(event, 'artesian_well')}></input>
        <label>
          <UploadImage  setImage={this.handleImage}/>
        </label>
        <br/>
        <button>Working on component</button>
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