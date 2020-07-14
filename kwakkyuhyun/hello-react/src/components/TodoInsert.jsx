import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md'
import styles from './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [ value, setValue ] = useState('');
    
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);
    
    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');
        e.preventDefault();
    }, [onInsert, value]);
    
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <input
                type="text"
                className={styles.input}
                value={value}
                onChange={onChange}
                placeholder="할 일을 입력해주세요"
            />
            <button type="submit" className={styles.button}>
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;
