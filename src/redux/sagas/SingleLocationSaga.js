import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SINGLELOCATION" actions
function* fetchSingleLocation(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    console.log(action.payload);
    
    const response = yield axios.get(`/api/single-location/${action.payload}`, config);

    yield put({ type: 'GET_SINGLELOCATION', payload: response.data });
    console.log(response.data);
  } catch (error) {
    console.log('single location get request failed', error);
  }
}

function* SingleLocationSaga() {
  yield takeLatest('FETCH_SINGLELOCATION', fetchSingleLocation);
}

export default SingleLocationSaga;