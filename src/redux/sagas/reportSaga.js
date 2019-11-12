import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchReports(action){
    try{
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          };

          const response = yield axios.get(`/api/reports/${action.payload}`, config);
          console.log('report saga XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', response.data)
          yield put({type:'SET_REPORTS', payload: response.data})
    }catch(error){
        console.log(error);
    }
}
function* fetchSingleReport(action) {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
      console.log(action.payload);
      
      const response = yield axios.get(`/api/reports/report/${action.payload}`, config);
  
      yield put({ type: 'SET_SINGLE_REPORT', payload: response.data });
      console.log(response.data);
    } catch (error) {
      console.log('single location get request failed', error);
    }
  }



function* reviewSaga(){
    yield takeLatest('FETCH_REPORTS', fetchReports);
    yield takeLatest('FETCH_SINGLE_REPORT', fetchSingleReport)
}

export default reviewSaga;