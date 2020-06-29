import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MyComponent.module.scss';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        const { name, children, favoriteNumber } = this.props;
        return (
            <header className={styles.header}>
                <h1 className={styles.title}>
                    React Component
                </h1>
                <p className={styles.desc}>
                    안녕하세요, 제 이름은 {name}입니다. <br />
                    children 값은 {children}입니다. <br />
                    제일 좋아하는 숫자는 {favoriteNumber}입니다.
                </p>
            </header>
        )
    }
}

MyComponent.defaultProps = {
    name: '기본 이름',
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
}

export default MyComponent;
