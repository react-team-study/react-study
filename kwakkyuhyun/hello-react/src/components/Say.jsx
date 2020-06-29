import React, { useState } from 'react';
import styles from './Say.module.scss';

const Say = () => {
    const [ message, setMessage ] = useState('');
    const onClickEnter = () => setMessage('안녕하세요! :)');
    const onClickLeave = () => setMessage('안녕히 가세요! :)');
    
    const [ color, setColor ] = useState('black');
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>useState사용</h2>
            <button type="button" className={styles.button_control} onClick={onClickEnter}>입장</button>
            <button type="button" className={styles.button_control} onClick={onClickLeave}>퇴장</button>
            <strong className={styles.message}style={{ color }}>{message}</strong>
            <button
                type="button"
                className={styles.button_color}
                style={{ color: 'red' }}
                onClick={() => {
                    setColor('red')
                }
            }>
                빨간색
            </button>
            <button
                type="button"
                className={styles.button_color}
                style={{ color: 'green' }}
                onClick={() => {
                    setColor('green')
                }
            }>
                초록색
            </button>
            <button
                type="button"
                className={styles.button_color}
                style={{ color: 'blue' }}
                onClick={() => {
                    setColor('blue')
                }
            }>
                파란색
            </button>
        </section>
    );
}

export default Say;
