import { createAction, handleActions } from 'redux-actions';
import {
  delay,
  put,
  takeEvery,
  takeLatest,
  throttle,
  select,
} from 'redux-saga/effects';

// define Action Type
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

// define Action Creator
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// export const increaseAsync = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(increase());
//   }, 1000);
// };

// export const decreaseAsync = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(decrease());
//   }, 1000);
// };

export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
  const number = yield select((state) => state.counter);
  console.log(`현재 값은 ${number} 입니다.`);
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  // yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield throttle(3000, INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseAsync);
}

// initial
const initialState = 0;

// reducer function
const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState,
);

export default counter;
