import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ["", "", ""];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return '';
        case 1:
            return '';
        case 2:
            return '';
        default:
            return 'Unknown stepIndex';
    }
}



export default function HorizontalLabelPositionBelowStepper(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
        props.handleNext();
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
        props.handleBack();
    };

    const handleSubmit = () => {
        setActiveStep(0);
        props.handleSubmit();
        props.handleReset();
    };

    return (
        <div className={classes.root}>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </div>
                ) : (
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.backButton}
                                >
                                    Back
                                </Button>
                                <Button variant="contained" color="primary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
            </div>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}