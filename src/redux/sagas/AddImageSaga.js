import {takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postImage(action) {
    // console.log(action);
    
  try {
    yield axios.post('/api/photo', action.payload);
    // yield console.log(action.payload);
  } catch (error) {
      console.log('Error with post image saga:', error);
  }
}

function* deleteImage(action){
  try{
    yield axios.delete(`/api/photo/${action.payload}`)
  }catch(err){
    console.log("Error with delete image saga", err);
  }
}

function* AddImageSaga() {
  yield takeLatest('POST_IMAGE', postImage);
  yield takeLatest('DELETE_IMAGE', deleteImage);
}

export default AddImageSaga;