import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';
import { bindActionCreators } from 'redux';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

const mapStateToProps = (state) => ({
  number: state.counter.number,
});

const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// connect 함수 내부에 mapStateToProps/mapDispatchProps 를 내부 익명함수 형태로도 작성 가능

// export default connect(
//   (state) => ({ number: state.counter.number }),
//   dispatch({
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//   }),
// )(CounterContainer);

/**
 * 액션생성함수 갯수 많을수록 --> bindActionCreators 사용하면 간편함.
 */

// export default connect(
//  (state) => ({ number: state.counter.number }),
// (dispatch) =>
//   bindActionCreators(
//     {
//       increase,
//       decrease,
//     },
//     dispatch,
//   );
// )(CounterContainer);

// export default connect(
//  (state) => ({ number: state.counter.number }),
//     {
//       increase,
//       decrease,
//     },
// )(CounterContainer);
