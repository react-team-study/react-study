import React, { useReducer } from 'react';
import styles from './CounterUsingHook.scss';
import BaseLayout from './BaseLayout';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default:
            return state;
    }
}

const CounterUsingHook = () => {
    const [ state, dispatch ] = useReducer(reducer, { value: 0 });
    return (
        <BaseLayout title={'Hook'}>
            <p className={styles.desc}>
                현재 카운터 값은 <strong>{state.value}</strong>입니다.
            </p>
            <button type="button" className={styles.button} onClick={() => dispatch({ type: 'INCREMENT' })}>
                +1
            </button>
            <button type="button" className={styles.button} onClick={() => dispatch({ type: 'DECREMENT' })}>
                -1
            </button>
        </BaseLayout>
    );
};

export default CounterUsingHook;
