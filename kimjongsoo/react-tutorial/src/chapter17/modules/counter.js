import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/**
 * Action creator function
 */
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
/**
 * redux-actions
 */
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
  number: 0,
};

/**
 * reducer function
 *
 * @param {*} state
 * @param {*} action
 */
// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

/**
 * redux-actions
 *
 *  각 액션에 대한 업데이트 함수
 * 초기함수
 */
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

export default counter;
