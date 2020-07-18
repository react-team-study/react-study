import React from 'react';
import styles from './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <ul className={styles.list}>
            {todos.map(items => {
                return (
                    <TodoListItem
                        key={`todo-item-${items.id}`}
                        items={items}
                        onRemove={onRemove}
                        onToggle={onToggle}
                    />
                )
            })}
        </ul>
    );
};

export default React.memo(TodoList);
