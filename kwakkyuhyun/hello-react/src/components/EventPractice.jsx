import React, { Component } from 'react';
import styles from './EventPractice.module.scss';

class EventPractice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            message: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
        // console.log(e.target.name, e.target.value);
        // console.log(this.state);
    }
    
    handleClick = () => {
        alert(this.state.username + ' : ' + this.state.message);
        this.setState({
            username: '',
            message: '',
        })
    }
    
    handleKeyPress = e => {
        if(e.key === "Enter") {
            this.handleClick();
        }
    }
    
    render() {
        const { message, username } = this.state;
        return (
            <section className={styles.section}>
                <h2 className={styles.title}>Event Practice</h2>
                <input
                    type="text"
                    className={styles.input}
                    name="username"
                    placeholder="이름을 입력하세요."
                    value={username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    className={styles.input}
                    name="message"
                    placeholder="글을 입력하세요."
                    value={message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button
                    type="button"
                    className={styles.button}
                    onClick={this.handleClick}
                >
                    확인
                </button>
            </section>
        );
    }
}

export default EventPractice;
