import React, { useCallback, useRef, useState } from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
    const [value,setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    },[]); // 컴포넌트가 처음 랜더링 될때만 함수 생성 (재사용)

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            e.preventDefault(); // submit 이벤트는 브라우저에서 새로고침을 발생시킴
        },
        [onInsert, value],
    )
    return (
        <form className="TodoInsert" onSubmit ={onSubmit}>
            <input  placeholder="할일을 입력하세요"
                    value = {value}
                    onChange ={onChange}
            />

            <button type="submit">
                    <MdAdd/>
            </button>
        </form>
    )
}

export default TodoInsert;
