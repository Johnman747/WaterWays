import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchReviews(){
    try{
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          };

          const response = yield axios.get('/api/reviews/', config);
          yield put({type:'SET_REVIEWS', payload:response.payload})
    }catch(error){
        console.log(error);
    }
}

function* reviewSaga(){
    yield takeLatest('FETCH_REVIEWS', fetchReviews);
}

export default reviewSaga;