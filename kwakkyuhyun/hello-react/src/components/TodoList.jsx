import React from 'react';
// import { List } from 'react-virtualized';
import styles from './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onRemove, onToggle }) => {
    // const rowRenderer = useCallback(
    //     ({ index, key }) => {
    //         const todo = todos[index];
    //         return (
    //             <TodoListItem
    //                 key={`todo-item-${key}`}
    //                 items={todo}
    //                 onRemove={onRemove}
    //                 onToggle={onToggle}
    //             />
    //         );
    //     }
    // )
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
        // <List
        //     className={styles.list}
        //     width={768}
        //     height={587}
        //     rowCount={todos.length}
        //     rowHeight={84}
        //     rowRenderer={rowRenderer}
        //     list={todos}
        // />
    );
};

export default React.memo(TodoList);
