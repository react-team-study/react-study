import React, { useState, useMemo, useCallback, useRef } from 'react';
import styles from './Average.module.scss';
import BaseLayout from './BaseLayout';

const getAverage = numbers => {
    console.log('평균값 계산 중..');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [ list, setList ] = useState([]);
    const [ number, setNumber ] = useState('');
    const inputEl = useRef(null);
    
    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, [])
    
    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        // useRef를 통해 만든 객체 안의 current 값이 실제 엘리먼트 가르킴
        inputEl.current.focus();
    }, [number, list]);
    
    const avg = useMemo(() => getAverage(list), [list]);
    
    return (
        <BaseLayout title={'useMemo 사용'}>
            <input
                type="text"
                value={number}
                className={styles.input}
                onChange={onChange}
                ref={inputEl}
            />
            <button type="button" className={styles.button} onClick={onInsert}>등록</button>
            <ul className={styles.list}>
                {list.map((item, index) => {
                    return (
                        <li key={index} className={styles.item}>
                            {item}
                        </li>
                    )
                })}
            </ul>
            <strong className={styles.average}>평균값: {avg}</strong>
        </BaseLayout>
    );
};

export default Average;
