import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPhotos(action){
    try{
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          };

          const response = yield axios.get(`/api/photo/${action.payload}`, config);
          // console.log('photos saga XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', response.data)
          yield put({type:'SET_PHOTOS', payload: response.data})
    }catch(error){
        console.log(error);
    }
}
function* fetchSinglePhoto(action) {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
      // console.log(action.payload);
      
      const response = yield axios.get(`/api/photos/photo/${action.payload}`, config);
  
      yield put({ type: 'SET_SINGLE_PHOTO', payload: response.data });
      // console.log(response.data);
    } catch (error) {
      console.log('single photo get request failed', error);
    }
}

function* photoSaga(){
    yield takeLatest('FETCH_PHOTOS', fetchPhotos);
    yield takeLatest('FETCH_SINGLE_PHOTO', fetchSinglePhoto);
}

export default photoSaga;