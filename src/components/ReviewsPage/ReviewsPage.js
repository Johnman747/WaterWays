import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ReviewsPage extends Component{




    render(){
        return(

            <div className='ReviewsBody'>
                {this.props.reduxStore.reviewsReducer.map( reviews => {
                    return <p>{reviews.comment}</p>
                })}
            </div>
        )
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore
});
export default withRouter(connect(mapStateToProps)(ReviewsPage));