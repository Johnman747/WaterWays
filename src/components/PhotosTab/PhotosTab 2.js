import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class PhotosTab extends Component{


    

    render(){
        return(
            <div className='PhotosBody'>
                {this.props.reduxStore.PhotosReducer.map( photos => {
                    console.log(this.props.reduxStore.PhotosReducer)
                    return <img src={photos.photo_img_string}/>
                })}
                
            </div>
        )
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore
});

export default withRouter(connect(mapStateToProps)(PhotosTab));