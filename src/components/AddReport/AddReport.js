import React, { Component } from 'react';
import { connect } from 'react-redux';



class AddReport extends Component{

    state = {
        reportToAdd: {
            created_by: this.props.reduxStore.user.id,
            location: this.props.reduxStore.locationsReducer.id,
            issue_comment: '',
            issue_type: '',
        }
    }
    handleChange = (event, propertyName) => {
        this.setState({
            reportToAdd: {
                ...this.state.reportToAdd,
                [propertyName]: event.target.value, 
            }
        });
        console.log(this.state.reportToAdd)
    } // end handleChange

    addNewReport = event => {
        event.preventDefault();
        console.log('booyah')
        this.props.dispatch({ type: 'POST_REPORT', payload: this.state.reportToAdd})
    } // end addNewReport

    render(){
        return(
            <div className='reportBody'>
                <form onSubmit={this.addNewReport}>
                    <h1>Report</h1>
                    <label>Select the reason for reporting</label><br/>
                    <select onChange={(event)=>{this.handleChange(event, 'issue_type')}}>
                        <option selected value='Choose One'>Choose One</option>
                        <option value='Health Concerns'>Health Concerns</option>
                        <option value='Location Closed'>Location Closed</option>
                        <option value='Location Damaged/Vandalized'>Location Damaged/Vandalized</option>
                        <option value='Dry'>Dry</option>
                        <option value='Problem Resolved'>Problem Resolved</option>
                        <option value='Other'>Other</option>
                    </select><br/>
                    <label>Reason</label>
                    <input onChange={(event)=>{this.handleChange(event, 'issue_comment')}}></input><br/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore
  });
  export default connect(mapStateToProps)(AddReport);