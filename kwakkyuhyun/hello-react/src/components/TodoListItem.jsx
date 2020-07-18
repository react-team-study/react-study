import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md';
import classnames from 'classnames';
import styles from './TodoListItem.scss';

const TodoListItem = ({ items, onToggle, onRemove }) => {
    const { id, text, complete } = items;
    return (
        <li className={styles.item}>
            <button
                type="button"
                className={classnames(styles.button_checkbox, complete && styles.is_complete)}
                onClick={() => onToggle(id)}
            >
                    {complete
                        ? <MdCheckBox />
                        : <MdCheckBoxOutlineBlank />
                    }
            </button>
            <p className={classnames(styles.text, complete && styles.is_complete)}>
                {text}
            </p>
            <button type="button" className={styles.button_remove} onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </button>
        </li>
    );
};

export default React.memo(TodoListItem);
