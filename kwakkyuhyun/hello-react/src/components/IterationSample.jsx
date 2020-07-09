import React, { Component } from 'react';
import styles from './IterationSample.module.scss';
import BaseLayout from './BaseLayout';

class IterationSample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { id: 0, name: 'Facebook', },
                { id: 1, name: 'Apple', },
                { id: 2, name: 'Amazon', },
                { id: 3, name: 'Netflix', },
                { id: 4, name: 'Google', },
            ],
            inputText: '',
        }
    }
    
    onChange = e => {
        this.setState({ inputText: e.target.value });
    }
    
    onClick = () => {
        const addName = this.state.list.concat({ id: this.state.list.length, name: this.state.inputText });
        this.setState({ list: addName, inputText: '' });
    }
    
    onRemove = idx => {
        const deleteName = this.state.list.filter((item, index) => index !== idx);
        this.setState({ list: deleteName, });
    }
    
    render() {
        const { list, inputText } = this.state;
        return (
            <BaseLayout title={'Iteration Sample'}>
                <input
                    type="text"
                    className={styles.input}
                    value={inputText}
                    onChange={this.onChange}
                />
                <button
                    type="button"
                    className={styles.button}
                    onClick={this.onClick}
                >
                    추가
                </button>
                <ul className={styles.list}>
                    {list.map((items, idx) => {
                        return (
                            <li key={`item-${idx}`} className={styles.item}>
                                {items.name}
                                <button
                                    type="button"
                                    className={styles.delete}
                                    onClick={() => this.onRemove(idx)}
                                >
                                    X
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </BaseLayout>
        );
    }
}

export default IterationSample;
