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

function* deleteReport(action){
    try{
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          };
          //action payload MUST be the id of the REVIEW no location
          const response = yield axios.delete(`/api/reports/report/${action.payload}`, config);
          console.log(response);
          this.fetchReports();
    }catch(error){
        console.log(error);
    }
}

function* postReport(action){
  try{
    console.log("post report -------------------",action.payload)
    yield axios.post('/api/reports', action.payload);
    const thing = {payload: action.payload.location}
    yield this.fetchReports(thing)

  }catch(error){
    console.log(error);
    
  }
}



function* reviewSaga(){
    yield takeLatest('FETCH_REPORTS', fetchReports);
    yield takeLatest('FETCH_SINGLE_REPORT', fetchSingleReport);
    yield takeLatest('DELETE_REPORT', deleteReport);
    yield takeLatest('POST_REPORT', postReport)
}

export default reviewSaga;