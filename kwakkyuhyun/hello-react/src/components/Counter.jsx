import React, { Component } from 'react';
import styles from './Counter.module.scss';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            fixedNumber: 13,
        }
    }
    render() {
        const { number, fixedNumber } = this.state;
        return (
            <div className={styles.wrap}>
                <h2 className={styles.title}>숫자 카운터</h2>
                <div className={styles.count}>{number}</div>
                <div className={styles.fixed_count}>{fixedNumber}</div>
                <button
                    type="button"
                    className={styles.button_plus}
                    onClick={() => {
                        this.setState(
                            {
                                number: number + 1
                            },
                            () => {
                                console.log('방금 serState가 호출되었습니다.');
                            }
                        );
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;
