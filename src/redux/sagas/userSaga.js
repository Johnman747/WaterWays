import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/user', config);
    console.log(response.data);
    
    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

// Get all users for the moderate user page. 
function* getAllUser() {
  try {
      const response = yield axios.get('/api/user/all');
      yield put({ type: 'SET_ALL_USER_INFO', payload: response.data });
      yield console.log(response.data);
  } catch (error) {
      console.log('error in FETCH ALL USER INFO saga', error);
  }
} // end getAllUser

// Delete users for the moderate user page. 
function* deleteUser (action) {
  try {
    yield console.log(action.payload);
      yield axios.put(`/api/user/all/${action.payload.id}`, action.payload );
      yield getAllUser();
  } catch (error) {
      console.log('error in DELETE User saga', error);
  }
} // end deleteLocation
function* updateAdminLevel(action) {
  try {
    yield console.log(action.payload);
      yield axios.put(`/api/user/admin_level/${action.payload.id}`, action.payload );
      yield getAllUser();
  } catch (error) {
      console.log('error in update admin level User saga', error);
  }
} // end deleteLocation


function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeLatest('FETCH_ALL_USER', getAllUser);
  yield takeLatest('DELETE_USER', deleteUser);
  yield takeLatest('CHANGE_ADMIN_LEVEL', updateAdminLevel);
}

export default userSaga;
