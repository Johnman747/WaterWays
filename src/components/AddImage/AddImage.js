import React, { Component } from 'react'
import UploadImage from '../AddLocation/UploadImage'
import { connect } from 'react-redux';

class AddImage extends Component{
  state={
      photo:'',
      id:this.props.locationId,
  }
  handleImage = (imageUrl) => {
    this.setState({
        photo: imageUrl
    })
  }

  handle_AddImage = () =>{
    this.props.dispatch({ type: 'POST_IMAGE', payload: this.state })
}

    render(){
        return(
            <div>
            <UploadImage setImage={this.handleImage} />
            <button onClick={this.handle_AddImage}>submit</button>
            </div>
        )
    }
}
const mapStateToProps = (reduxStore) => ({
  reduxStore
});
export default connect(mapStateToProps)(AddImage);