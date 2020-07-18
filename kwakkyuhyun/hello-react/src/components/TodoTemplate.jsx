import React, { useCallback, useState, useRef } from 'react';
import TodoInsert from './TodoInsert';
import styles from './TodoTemplate.scss';
import TodoList from './TodoList';

// function todoReducer(todos, action) {
//     switch(action.type) {
//         case 'INSERT':
//             return todos.concat(action.todo);
//         case 'REMOVE':
//             return todos.filter((todo, index) => action.idx !== index);
//         case 'TOGGLE':
//             return todos.map((todo, index) => index === action.idx ? { ...todo, complete: !todo.complete } : todo);
//         default:
//             return todos;
//     }
// }

function createTodos() {
    const array = [];
    
    for(let i = 1; i <= 2500; i++) {
        array.push({
            id: i,
            text: `할일 ${i}`,
            complete: false,
        });
    }
    
    return array;
}

const TodoTemplate = () => {
    const [ todos, setTodos ] = useState(createTodos);
    // const [ todos, dispatch ] = useReducer( todoReducer, undefined, createTodos );
    
    const nextId = useRef(2501);
    
    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text,
            checked: false,
        };
        setTodos(todos => todos.concat(todo));
        nextId.current += 1;
        // dispatch({ type: 'INSERT', todo: todo });
    }, []);
    
    const onRemove = useCallback(idx => {
        setTodos(todos => todos.filter(todo => todo.id !== idx));
        // dispatch({ type: 'REMOVE', idx: idx });
    }, []);
    
    const onToggle = useCallback(idx => {
        setTodos(todos => 
                todos.map(todo =>
                    todo.id === idx ? { ...todo, complete: !todo.complete } : todo
                )
            );
        // dispatch({ type: 'TOGGLE', idx: idx });
    }, []);
    
    return (
        <div className={styles.wrap}>
            <div role="main" id="content" className={styles.content}>
                <h1 className={styles.title}>일정 관리</h1>
                <TodoInsert onInsert={onInsert} />
                <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
            </div>
        </div>
    );
};

export default TodoTemplate;
