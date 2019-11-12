import React, { Component } from 'react'

class AddImage extends Component{
    
    onchange = (event) =>{
        let image = event.target.files;
        let reader = new FileReader();
    
        reader.readAsDataURL(image[0]);
        reader.onload = (event) =>{
          const formData = {image: event.target.result}
          this.props.setPhoto(formData);
        }
      }
    render(){
        return(
            <div>
            <input type="file" name="image" onChange={(event) => this.onchange(event)}/>
            </div>
        )
    }
}
export default AddImage;