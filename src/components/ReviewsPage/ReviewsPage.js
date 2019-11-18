import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';


class ReviewsPage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'DELETE_REVIEW', payload: this.props.reduxStore.user.id });
        this.props.dispatch({ type: 'FETCH_REVIEWS', payload: this.props.match.params.id });
    }

    handleDelete = (id) => {
        this.props.dispatch({ type: 'DELETE_REVIEW', payload: id });
        this.props.dispatch({ type: 'FETCH_REVIEWS', payload: this.props.match.params.id });
        // this.props.history.push('/');
    }
    render() {
        return (

            <div className='ReviewsBody'>
                {this.props.reduxStore.reviewsReducer.map(reviews => {
                    return <div key={reviews.id} className="ReviewDiv">
                        <h4 className="ReviewName">{reviews.first_name} {reviews.last_name}</h4>
                        <Rating className="RagingPageStars" value={reviews.review_score_of_five} />
                        <p className="ReviewComment">"{reviews.comment}"</p>
                        {this.props.reduxStore.user.admin_level === 3 &&
                            <Button className="deleteReviewBtn" onClick={() => this.handleDelete(reviews.id)}>Delete</Button>
                        }
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