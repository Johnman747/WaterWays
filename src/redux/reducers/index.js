import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import SingleLocationReducer from './SingleLocationReducer'
import locationsReducer from './locationsReducer';
import reviewsReducer from './reviewsReducer';
import reportsReducer from './reportsReducer';
import singleReport from './singleReportReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  SingleLocationReducer,//will have iformation pertaining to single location water source.
  locationsReducer, 
  reviewsReducer,
  reportsReducer,
  singleReport// will have an id and username if someone is logged in
});

export default rootReducer;
