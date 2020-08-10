import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterCiontainerInHook = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()));
  const onDecrease = useCallback(() => dispatch(decrease()));
  return (
    <Counter
      number={number}
      //   onIncrease={() => dispatch(increase())}
      //   onDecrease={() => dispatch(decrease())}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
};

export default CounterCiontainerInHook;
