import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';

class ReviewsPage extends Component {
    render() {
        return (

            <div className='ReviewsBody'>
                {this.props.reduxStore.reviewsReducer.map(reviews => {
                    return <div className="ReviewDiv">
                        <h4 className="ReviewName">{reviews.first_name} {reviews.last_name}</h4>
                        <Rating className="RagingPageStars" value={reviews.review_score_of_five} />
                        <p className="ReviewComment">"{reviews.comment}"</p>
                        <div className="LineSplitter"></div>
                    </div>
                })}
            </div>
        )
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore
});
export default withRouter(connect(mapStateToProps)(ReviewsPage));