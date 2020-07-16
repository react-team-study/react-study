import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md';
import classnames from 'classnames';
import styles from './TodoListItem.scss';

const TodoListItem = ({ items, index, onToggle, onRemove }) => {
    return (
        <li className={styles.item}>
            <button
                type="button"
                className={classnames(styles.button_checkbox, items.complete && styles.is_complete)}
                onClick={() => onToggle(index)}
            >
                    {items.complete
                        ? <MdCheckBox />
                        : <MdCheckBoxOutlineBlank />
                    }
            </button>
            <p className={classnames(styles.text, items.complete && styles.is_complete)}>
                {items.text}
            </p>
            <button type="button" className={styles.button_remove} onClick={() => onRemove(index)}>
                <MdRemoveCircleOutline />
            </button>
        </li>
    );
};

export default React.memo(TodoListItem);
