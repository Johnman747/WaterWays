import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NativeSelect from '@material-ui/core/NativeSelect';
import { withRouter } from 'react-router-dom';
import './AddReport.css'
import BackButton from '../Icons/backArrowWhite.png'
import swal from 'sweetalert';


class AddReport extends Component {

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
        // console.log(this.state.reportToAdd)
    } // end handleChange

    addNewReport = event => {
        event.preventDefault();
        swal({
            title: "Thanks for your report!",
            text: "We appreciate your contribution to keeping the water sources safe and up to date.",
          }).then(()=>{
        this.props.dispatch({ type: 'POST_REPORT', payload: this.state.reportToAdd });
        this.props.history.push(`/location/${this.props.match.params.id}`)
          })
    } // end addNewReport

    BackButton = () =>{
        this.props.history.push(`/location/${this.props.match.params.id}`)
    }

    render() {
        return (
            <div className='reportBody'>
                <img onClick={this.BackButton} className="ReportPageBackIcon" src={BackButton} alt="Back Button" />
                <form>
                    <div className="AddReportHeader">
                        <h1>Report</h1>
                    </div>
                    <label className="ReportPageLabel">Select the reason for reporting</label><br />
                    <div >
                        <NativeSelect
                            value={this.state.issue_type}
                            onChange={(event) => { this.handleChange(event, 'issue_type') }}
                            className="AddReportSelect"
                        >
                            <option value='Health Concerns'>Health Concerns</option>
                            <option value='Location Closed'>Location Closed</option>
                            <option value='Location Damaged/Vandalized'>Location Damaged/Vandalized</option>
                            <option value='Dry'>Dry</option>
                            <option value='Problem Resolved'>Problem Resolved</option>
                            <option value='Other'>Other</option>
                        </NativeSelect><br />
                    </div>
                    <h4 className="ReportPageLabel">Please describe the problem here:</h4>
                    <div className="ReportPageTextField">
                    <TextField
                        onChange={(event) => { this.handleChange(event, 'issue_comment') }}
                        id="outlined-textarea"
                        label="Description"
                        multiline
                        rows={5}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                    </div>
                    <br />
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