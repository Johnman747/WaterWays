import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import SingleLocationReducer from './SingleLocationReducer'
import locationsReducer from './locationsReducer';
import allUserReducer from './allUserReducer'
import reviewsReducer from './reviewsReducer';
import reportsReducer from './reportsReducer';
import singleReport from './singleReportReducer';
import singleReview from './singleReviewReducer';
import PhotosReducer from './PhotosReducer';
import filteredLocationsReducer from './filteredLocationsReducer';
import historyReducer from './historyReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  allUserReducer, // calls all users for the admin page
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  SingleLocationReducer,//will have iformation pertaining to single location water source.
  locationsReducer, 
  reviewsReducer,
  reportsReducer,
  singleReport,
  singleReview,// will have an id and username if someone is logged in
  PhotosReducer,
  filteredLocationsReducer,
  historyReducer
});

export default rootReducer;
