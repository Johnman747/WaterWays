import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import './AddImagePage.css';
import BackButton from '../Icons/backArrowWhite.png'
import { withRouter } from 'react-router-dom'
class AddImagePage extends Component {
    state = {
        photo: '',
        id: this.props.match.params.id,
    }
    handleImage = (imageUrl) => {
        this.setState({
            photo: imageUrl
        })
    }

    handle_AddImage = () => {
        const formData = {
            photo:{image: this.state.photo},
            id: this.props.match.params.id,
        }
        this.props.dispatch({ type: 'POST_IMAGE', payload: formData })
        this.props.dispatch({ type: 'FETCH_PHOTOS', payload: this.props.match.params.id });
        this.props.history.push(`/location/${this.props.match.params.id}`)
        // console.log(this.state.photo);

    }

    BackButton = () => {
        this.props.history.push(`/location/${this.props.match.params.id}`)
    }

    onchange = (event) => {
        let image = event.target.files;
        let reader = new FileReader();

        reader.readAsDataURL(image[0]);
        reader.onload = (event) => {
            const formData = event.target.result
            this.setState({
                photo: formData
            })
        }
    }

    render() {
        return (
            <div className="AddImagePage">
                <img onClick={this.BackButton} src={BackButton} alt="Back Button" className="AddImagePageBackButton" />
                <div className="AddImageHeader">
                    <h1>Add Image</h1>
                </div>
                <div className="UploadImageAddImagePage">
                    <input type="file" name="image" onChange={(event) => this.onchange(event)} />
                </div>
                <div className="AddImagePagePreview">
                    {this.state.photo === "" ?
                        "Image Preview"
                        :
                        <img className="ImagePreview" src={this.state.photo} alt="Preview" />
                    }
                </div>
                <div className="AddImageButton">
                <Button className="AddImageButton" onClick={this.handle_AddImage} variant="contained" color="primary">Submit</Button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default withRouter(connect(mapStateToProps)(AddImagePage));