import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rating from '@material-ui/lab/Rating';

class StarRating extends Component {

    state = {
        rating: null
    }

    componentDidUpdate(){
        if(this.state.rating === null || isNaN(this.state.rating)){
            this.getRating()
        }
    }

    getRating = () => {
        let Stars = 0
        this.props.reduxStore.reviewsReducer.map(rating =>
            Stars += rating.review_score_of_five
            )
            console.log(Stars/this.props.reduxStore.reviewsReducer.length);
            this.setState({
                rating: Stars/this.props.reduxStore.reviewsReducer.length
            })
    }

    render() {
        return (
            <>
                <Rating name="starRating" value={this.state.rating} readOnly precision={0.5} size="large" />
            </>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(StarRating)