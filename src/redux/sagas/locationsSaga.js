import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchLocations() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const response = yield axios.get('/api/locations/', config);
    console.log(response.data)
    yield put({type:'SET_LOCATIONS', payload: response.data});
    // the config includes credentials which
    // allow the server session to recognize the user
    // when the server recognizes the user session
    // it will end the session

  } catch (error) {
    console.log('Error with Get locations:', error);
  }
}

function* locationsSaga() {
  yield takeLatest('FETCH_LOCATIONS', fetchLocations)
}

export default locationsSaga;
