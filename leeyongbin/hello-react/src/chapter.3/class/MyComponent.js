import React,{Component} from 'react';
import PropType from 'prop-types';

class MyComponent extends Component{
    //3.3.7 클래스형 컴포넌트에서 props 사용하기
    // static defaultProps = {
    //     name : '기본이름'
    // };
    
    // static propTypes = {
    //     name : this.propTypes.string,
    //     favoritNumber : this.propTypes.number.isRequired
    // };

    render(){ // 클래스형 컴포넌트는 render 함수를 사용해야하며 내부에서 JSX를 반환해야 한다.
        const {name,favoritNumber,children} = this.props;
        return (
            <>
                안녕하세요 저는 {name} 입니다.<br/>
                제가 좋아하는 숫자는 {favoritNumber} 입니다. <br/>
                children 값은 {children} 입니다.
            </>
        );
    }
}

MyComponent.defaultProps = {
        name : '이용빈'
}

MyComponent.PropType = {
    name : PropType.string,
    favoritNumber : PropType.number.isRequired
}

// 

// 일반 함수는 자신이 종속된 객체의 this를 가리키며, 화살표 함수는 자신이 종속된 인스턴스를 가리킨다.
export default MyComponent;