import React, {Component} from 'react';
import AddImage from '../AddImage/AddImage'
import {withRouter} from 'react-router-dom';

class MenuModal extends Component {
    state = { 
        isOpen: false,
        Image:{
            photo:'',
            id:this.props.locationInfo,
        }  
    };
    handlePhoto = (imageUrl) =>{
        this.setState({
          Image:{
            ...this.state.Image,
            photo: imageUrl
          }
        })
      }

    handle_Modal = () =>{
        this.setState({
            isOpen:true,
        })
    }
    handle_Resolve_Report = () =>{
        this.history.push()
    }
    handle_Review = () =>{
        this.history.push()
    }
    handle_AddImage = () =>{
        this.history.push()
    }
  render() {
      const showContent = this.state.isOpen;
    return (
        <div>
            {
                showContent === true ? 
                <div>
                    <button onClick={this.handle_Resolve_Report}>Resolve/Report a Problem</button>
                    <button onClick={this.handle_Review}>Leave a Review</button>
                    <AddImage setPhoto={this.handlePhoto}/>
                </div>
                :
                (null)
            }
            <button onClick={this.handle_Modal}>Modal</button>
        </div>
  )}
}

export default withRouter(MenuModal);