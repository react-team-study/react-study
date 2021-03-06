import React, { Component } from 'react';
import styles from './Counter.scss';
import BaseLayout from './BaseLayout';

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
            <BaseLayout title={'숫자 카운터'}>
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
            </BaseLayout>
        );
    }
}

export default Counter;
