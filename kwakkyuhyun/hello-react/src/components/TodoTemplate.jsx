import React from 'react';
import styles from './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
    return (
        <div className={styles.wrap}>
            <div role="main" id="content" className={styles.content}>
                <h1 className={styles.title}>일정 관리</h1>
            </div>
        </div>
    );
};

export default TodoTemplate;
