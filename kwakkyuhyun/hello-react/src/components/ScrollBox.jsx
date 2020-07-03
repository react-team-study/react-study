import React, { Component } from 'react';
import styles from './ScrollBox.module.scss';

class ScrollBox extends Component {
    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    }
    render() {
        return (
            <section className={styles.section}>
                <h2 className={styles.title}>Ref 사용</h2>
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
            </section>
        );
    }
}

export default ScrollBox;
