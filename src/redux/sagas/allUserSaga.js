import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

function* allUserSaga() {
    yield takeLatest('FETCH_ALL_USER', getAllUser);
}

function* getAllUser() {
    try {
        const response = yield axios.get('/api/user/all');
        yield put({ type: 'SET_ALL_USER_INFO', payload: response.data });
        yield console.log(response.data);
    } catch (error) {
        console.log('error in FETCH ALL USER INFO saga', error);
    }
} // end getAllUser

export default allUserSaga;