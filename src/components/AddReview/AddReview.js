import React, { Component } from 'react'
import { Rating } from '@material-ui/lab'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


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
        console.log(this.state);
    }

    handelSubmit = ()=>{
        this.props.dispatch({type: 'ADD_REVIEW', payload: this.state})
        this.props.history.push(`/location/${this.props.match.params.id}`)
    }

    render() {
        return (
            <>
                <h1>Add Review</h1>
                <label>Star Rating</label>
                <br />
                <Rating name="AddRating" value={this.state.review_score_of_five} onChange={(e) => this.handelChange(e, "review_score_of_five")} />
                <br />
                <label>Review:</label>
                <br />
                <textarea rows="5" onChange={(e)=>this.handelChange(e, "comment")}/>
                <br />
                <button onClick={this.handelSubmit}>Submit Review</button>
            </>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default withRouter(connect(mapStateToProps)(AddReviewPage));