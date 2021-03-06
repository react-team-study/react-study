import React, { Component } from 'react';
import styles from './ValidationSample.scss';
import classnames from 'classnames';
import BaseLayout from './BaseLayout';

class ValidationSample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            validated: false,
            clicked: false,
        }
    }
    
    handleChage = e => {
        this.setState({
            password: e.target.value,
        });
    }
    
    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000',
        });
        this.input.focus();
    }
    
    render() {
        const { password, clicked, validated } = this.state;
        return (
            <BaseLayout title={'Validation'}>
                <input
                    type="password"
                    ref={ref => { this.input = ref }}
                    value={password}
                    onChange={this.handleChage}
                    className={classnames(styles.input, clicked && (validated ? styles.success : styles.failure))}
                />
                <button
                    type="button"
                    className={styles.button}
                    onClick={this.handleButtonClick}
                >
                    검증하기
                </button>
                <p className={styles.desc}>
                    {clicked ? validated ? '비밀번호가 일치합니다 :)' : '비밀번호가 일치하지 않습니다 :(' : '비밀번호를 입력해주세요'}
                </p>
            </BaseLayout>
        );
    }
}

export default ValidationSample;
