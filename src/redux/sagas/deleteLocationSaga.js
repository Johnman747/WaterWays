import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "DELETE_LOCATION" actions
function* deleteLocation(action) {
  try {
    console.log('in delete saga',action.payload);
    yield axios.delete(`/api/answer/${action.payload}`);
    yield put({ type: 'GET_ANSWER'});
  } catch (error) {
    console.log('location delete request failed', error);
  }
}

function* DeleteLocationSaga() {
  yield takeLatest('DELETE_LOCATION', deleteLocation);
}

export default DeleteLocationSaga;