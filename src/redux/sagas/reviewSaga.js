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

function* reviewSaga(){
    yield takeLatest('FETCH_REVIEWS', fetchReviews);
}

export default reviewSaga;