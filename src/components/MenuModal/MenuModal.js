import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// ---- Material UI ---- //
import Modal from '@material-ui/core/Modal';
import Fab from '@material-ui/core/Fab';
import ClearSharpIcon from '@material-ui/icons/ClearSharp';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import ImageIcon from '@material-ui/icons/Image';
import AddIcon from '@material-ui/icons/Add';
import './MenuModal.css'

class MenuModal extends Component {
    state = {
        isOpen: false,
    };

    handle_Modal = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
        }));
        this.props.modalChange()
    }
    handle_Resolve_Report = () => {
        this.props.history.push(`/addreport/${this.props.locationInfo}`)
    }
    handle_Review = () => {
        this.props.history.push(`/addreview/${this.props.locationInfo}`)
    }
    handle_Add_Image = ()=>{
        this.props.history.push(`/addimage/${this.props.locationInfo}`)
    }

    render() {
        const showContent = this.state.isOpen;

        return (
            <div>
                <Modal
                    open={this.state.isOpen}
                    onClose={this.handle_Modal}
                >
                    <div>
                        {showContent === true &&
                            <div className="modalWindow">
                                <div className="ModalWindowFabDiv">
                                    <h4 className="FabLabel">Report/Resolve</h4>
                                    <Fab onClick={this.handle_Resolve_Report} color="primary" aria-label="Report"><ReportProblemIcon /></Fab>
                                </div>
                                <div className="ModalWindowFabDiv">
                                    <h4 className="FabLabel">Review</h4>
                                    <Fab onClick={this.handle_Review} color="primary" aria-label="Review"><RateReviewIcon /></Fab>
                                </div>
                                <div className="ModalWindowFabDiv">
                                    <h4 className="FabLabel">Add Image</h4>
                                    <Fab onClick={this.handle_Add_Image} color="primary" aria-label="AddImage"><ImageIcon/></Fab>
                                </div>
                                <Fab onClick={this.handle_Modal} color="primary" aria-label="Cancel"><ClearSharpIcon /></Fab>
                            </div>
                        }
                    </div>
                </Modal>
                {showContent === false &&
                    <Fab onClick={this.handle_Modal} color="primary" aria-label="Add" className="modalIcon"><AddIcon /></Fab>
                }
            </div>
        )
    }
}

export default withRouter(MenuModal);