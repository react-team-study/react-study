import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './counter';
import sample from './sample';
import sagaSample, { sampleSaga } from './sagaSample';
import loading from './loading';

const rootReducer = combineReducers({
  counter,
  // sample,
  sagaSample,
  loading,
});

// export default rootReducer;
export function* rootSaga() {
  yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;
