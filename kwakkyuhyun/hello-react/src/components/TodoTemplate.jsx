import React, { useState } from 'react';
import TodoInsert from './TodoInsert';
import styles from './TodoTemplate.scss';
import TodoList from './TodoList';
import { useCallback } from 'react';

const TodoTemplate = () => {
    const [ todos, setTodos ] = useState([
        {
            text: '리액트의 기초 알아보기',
            complete: true,
        },
        {
            text: '컴포넌트 스타일링 해보기',
            complete: true,
        },
        {
            text: '일정 관리 앱 만들어 보기',
            complete: false,
        },
    ]);
    
    const onInsert = useCallback(text => {
        const todo = {
            text,
            checked: false,
        };
        setTodos(todos.concat(todo));
    }, [todos]);
    
    return (
        <div className={styles.wrap}>
            <div role="main" id="content" className={styles.content}>
                <h1 className={styles.title}>일정 관리</h1>
                <TodoInsert onInsert={onInsert} />
                <TodoList todos={todos} />
            </div>
        </div>
    );
};

export default TodoTemplate;
