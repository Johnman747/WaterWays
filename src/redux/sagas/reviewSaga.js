import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchReviews(action){
    try{
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          };

          const response = yield axios.get(`/api/reviews/${action.payload}`, config);
          console.log('review saga XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', response.data)
          yield put({type:'SET_REVIEWS', payload: response.data})
    }catch(error){
        console.log(error);
    }
}

function* fetchSingleReview(action) {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
      console.log(action.payload);
      
      const response = yield axios.get(`/api/reviews/review/${action.payload}`, config);
      console.log('single review XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',response.data);
      yield put({ type: 'SET_SINGLE_REVIEW', payload: response.data });
      
    } catch (error) {
      console.log('single location get request failed', error);
    }
  }

  function* addReview(action) {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
      yield axios.post('/api/reviews', action.payload, config);
      // console.log("POST REVIEW ------------",action.payload);
      const thing = {payload: action.payload.location_id}
      this.fetchReviews(thing);
    } catch(error) {
      console.log('locations post request failed', error);
    }
  }

function* deleteReview(action){
    try{
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          };
          //action payload MUST be the id of the REVIEW no location
          const response = yield axios.delete(`/api/reviews/review/${action.payload}`, config);
          console.log(response);
          this.fetchReviews();
    }catch(error){
        console.log(error);
    }
}

function* reviewSaga(){
    yield takeLatest('FETCH_REVIEWS', fetchReviews);
    yield takeLatest('DELETE_REVIEW', deleteReview);
    yield takeLatest('FETCH_SINGLE_REVIEW', fetchSingleReview);
    yield takeLatest('ADD_REVIEW', addReview);
}

export default reviewSaga;