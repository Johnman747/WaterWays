import React, { Component } from 'react'
import { Rating } from '@material-ui/lab'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core'
import './AddReview.css';
import BackIcon from '../Icons/backArrowWhite.png'
import swal from 'sweetalert';


class AddReviewPage extends Component {
    state = {
        user_id: 0,
        review_score_of_five: 0,
        comment: '',
        locatation_id: ''
    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_USER' })
    }

    handelChange = (e, propertyName) => {
        this.setState({
            ...this.state,
            user_id: this.props.reduxStore.user.id,
            [propertyName]: e.target.value,
            locatation_id: this.props.match.params.id

        })
        // console.log(this.state);
    }

    handelSubmit = () => {
        swal({
            title: "Thanks for your review!",
            text: "We appreciate your feedback.",
          }).then(()=>{
        this.props.dispatch({ type: 'ADD_REVIEW', payload: this.state })
        this.props.history.push(`/location/${this.props.match.params.id}`)
        })
    }

    backButton = ()=>{
        this.props.history.push(`/location/${this.props.match.params.id}`)
    }

    handelReview = ()=>{
        this.setState({
            comment: "This spring water is great and you should totaly try it!"
        })
    }

    render() {
        return (
            <div className="AddReviewPage">
                <img className="AddReviewPageBackIcon" src={BackIcon} alt="Back Button"  onClick={this.backButton}/>
                <div className="AddReviewPageHeader">
                    <h1>Add Review</h1>
                </div>
                <h4 className="AddReviewPageLabels">Star Rating</h4>
                <div className="AddReviewPageStars">
                    <Rating
                    name="AddRating" 
                    value={this.state.review_score_of_five} 
                    onChange={(e) => this.handelChange(e, "review_score_of_five")}
                    size="large"
                     />
                </div>
                <h4 className="AddReviewPageLabels"> Please leave a <span onClick={this.handelReview}>review:</span></h4>
                <div className="AddReviewPageTextField">
                    <TextField
                        onChange={(e) => this.handelChange(e, "comment")}
                        label="Review"
                        multiline
                        rows={5}
                        margin="normal"
                        variant="outlined"
                        value={this.state.comment}
                        fullWidth
                    /></div>
                    <div className="AddReviewBtn" >
                <Button onClick={this.handelSubmit} variant="contained" color="primary">Submit</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default withRouter(connect(mapStateToProps)(AddReviewPage));