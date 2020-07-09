import React, { Component } from 'react';
import styles from './ScrollBox.module.scss';
import BaseLayout from './BaseLayout';

class ScrollBox extends Component {
    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    }
    render() {
        return (
            <BaseLayout title={'Ref 사용'}>
                <div className={styles.box} ref={ref => this.box = ref}>
                    <div className={styles.box_inner} />
                </div>
                <button
                    type="button"
                    className={styles.button}
                    onClick={() => this.scrollToBottom()}
                >
                    맨 밑으로
                </button>
            </BaseLayout>
        );
    }
}

export default ScrollBox;
