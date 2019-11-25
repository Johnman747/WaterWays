import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {Button} from '@material-ui/core'

class PhotosTab extends Component {


    componentDidMount() {
        // this.props.dispatch({ type: 'DELETE_IMAGE', payload: this.props.reduxStore.user.id});
        this.props.dispatch({ type: 'FETCH_PHOTOS', payload: this.props.match.params.id });
    }
    
    handleDelete = (id) => {    
        this.props.dispatch({ type: 'DELETE_IMAGE', payload:id});
        this.props.dispatch({ type: 'FETCH_PHOTOS', payload: this.props.match.params.id });
        // this.props.history.push('/');
    }

    render() {
        return (
            <div className='PhotosBody'>
                {this.props.reduxStore.PhotosReducer.map(photos => {
                    console.log(this.props.reduxStore.PhotosReducer)
                    return(
                        <div key={photos.id}>
                     <img className="photoTabPics" alt="Preview" src={photos.photo_img_string} />
                     {this.props.reduxStore.user.admin_level === 3 &&
                        <Button className="deleteReviewBtn" onClick={() => this.handleDelete(photos.id)}>Delete</Button>
                    }
                    </div>
                    )
                })}
            </div>
        )
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore
});

export default withRouter(connect(mapStateToProps)(PhotosTab));