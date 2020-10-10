import React from 'react';
import styles from '../scss/components/todos.scss';
import classnames from 'classnames';

const TodoItem = ({ todo, onToggle, onRemove }) => {
    return (
        <>
            <input
                id={`item-${todo.id}`}
                type="checkbox"
                onClick={() => onToggle(todo.id)}
                checked={todo.done}
                readOnly={true}
                className={styles.checkbox}
            />
            <label htmlFor={`item-${todo.id}`} className={styles.label} />
            <span className={classnames(styles.text, todo.done && styles.done)}>{todo.text}</span>
            <button type="button" className={styles.button_delete} onClick={() => onRemove(todo.id)}>X</button>
        </>
    );
};

const Todos = ({
    input,
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,
}) => {
    const onSubmit = e => {
        e.preventDefault();
        onInsert(input)
        onChangeInput('');
    };
    const onChange = e => onChangeInput(e.target.value);
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={input} onChange={onChange} />
                <button type="submit">등록</button>
            </form>
            <ul className={styles.list}>
                {todos.map(item => (
                    <li key={item.id} className={styles.item}>
                        <TodoItem
                            todo={item}
                            onToggle={onToggle}
                            onRemove={onRemove}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todos;
