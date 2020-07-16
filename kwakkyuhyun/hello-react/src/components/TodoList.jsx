import React from 'react';
import styles from './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <ul className={styles.list}>
            {todos.map((items, index) => {
                return (
                    <TodoListItem
                        key={`todo-item-${index}`}
                        items={items}
                        index={index}
                        onRemove={onRemove}
                        onToggle={onToggle}
                    />
                )
            })}
        </ul>
    );
};

export default React.memo(TodoList);
