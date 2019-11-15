import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';


class ReviewsPage extends Component{

handleDelete = (id) => {    
    this.props.dispatch({ type: 'DELETE_REVIEW', payload:id});
    // this.props.history.push('/');
  }
    render(){
        return(

            <div className='ReviewsBody'>
                {this.props.reduxStore.reviewsReducer.map( reviews => 
                    <div key={reviews.id}>
                    <p>{reviews.comment}</p>
                    <Button onClick={()=> this.handleDelete(reviews.id)}>Delete</Button>
                    </div>
    
                )}
            </div>
        )
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore
});
export default withRouter(connect(mapStateToProps)(ReviewsPage));