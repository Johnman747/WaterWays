import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NativeSelect from '@material-ui/core/NativeSelect';
import {withRouter} from 'react-router-dom';

class AddReport extends Component{

    state = {
        reportToAdd: {
            created_by: this.props.reduxStore.user.id,
            location: this.props.match.params.id,
            issue_comment: 'Health Concerns',
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
        console.log(this.state.reportToAdd)
        this.props.dispatch({ type: 'POST_REPORT', payload: this.state.reportToAdd});
        this.props.history.push(`/location/${this.props.match.params.id}`)
    } // end addNewReport

    render(){
        return(
            <div className='reportBody'>
                <form>
                    <h1>Report</h1>
                    <label>Select the reason for reporting</label><br/>
                    <NativeSelect
                        value={this.state.issue_type}
                        onChange={(event)=>{this.handleChange(event, 'issue_type')}}
                    >
                        <option value='Health Concerns'>Health Concerns</option>
                        <option value='Location Closed'>Location Closed</option>
                        <option value='Location Damaged/Vandalized'>Location Damaged/Vandalized</option>
                        <option value='Dry'>Dry</option>
                        <option value='Problem Resolved'>Problem Resolved</option>
                        <option value='Other'>Other</option>
                    </NativeSelect><br/>
                    <label>Reason</label>
                    <TextField
                        onChange={(event)=>{this.handleChange(event, 'issue_comment')}}
                        id="outlined-textarea"
                        label="Description"
                        multiline
                        margin="normal"
                        variant="filled"
                    /><br/>
                    <Button onClick={this.addNewReport} variant="contained" color="primary">
                    Submit
                    </Button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore
  });
  export default withRouter(connect(mapStateToProps)(AddReport));