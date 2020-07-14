import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md';
import classnames from 'classnames';
import styles from './TodoList.scss';

const TodoList = ({ todos }) => {
    return (
        <ul className={styles.list}>
            {todos.map((items, index) => {
                return (
                    <li className={styles.item} key={`todo-item-${index}`}>
                        <button type="button" className={classnames(styles.button_checkbox, items.complete && styles.is_complete)}>
                            {items.complete
                                ? <MdCheckBox />
                                : <MdCheckBoxOutlineBlank />
                            }
                        </button>
                        <p className={classnames(styles.text, items.complete && styles.is_complete)}>
                            {items.text}
                        </p>
                        <button type="button" className={styles.button_remove}>
                            <MdRemoveCircleOutline />
                        </button>
                    </li>
                )
            })}
        </ul>
    );
};

export default TodoList;
