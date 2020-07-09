import React, { Component } from 'react';
import styles from './LifeCycleSample.module.scss';
import BaseLayout from './BaseLayout';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    }
    
    myRef = null;
    
    constructor(props) {
        super(props);
        console.log('constructor');
    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevState.color) {
            return { color: nextProps.color };
        }
        return null;
    }
    
    componentDidMount() {
        console.log('componentDidMount');
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.number % 10 !== 4;
    }
    
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    
    handleClick = () => {
        this.setState({ number: this.state.number + 1 });
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot) {
            console.log('업데이트 되기 직전 색상: ' + snapshot);
        }
    }
    
    render() {
        console.log('render');
        
        const style = {
            color: this.props.color,
        };
        
        const { number, color } = this.state;
        
        return (
            <BaseLayout title={'LifeCycle'} type_noneBorder={true}>
                {/* {this.props.missing.value} */}
                <div className={styles.number} style={style} ref={(ref) => this.myRef = ref}>{number}</div>
                <p className={styles.color}>color: {color}</p>
                <button type="button" className={styles.button} onClick={this.handleClick}>더하기</button>
            </BaseLayout>
        );
    }
}

export default LifeCycleSample;
