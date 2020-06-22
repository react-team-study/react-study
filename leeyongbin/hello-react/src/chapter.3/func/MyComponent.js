import React from 'react';
import PropTypes from 'prop-types'; // props 타입을 지정

// const MyComponent = () => { // Arrow Func = () =>  {} param x 
//     return <>나의 새롭고 멋진 컴포넌트</>;
// }
// 일반 함수는 자신이 종속된 객체의 this를 가리키며, 화살표 함수는 자신이 종속된 인스턴스를 가리킨다.

//3.3.1 props ( props는 properties를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소)
// const MyComponent = props => { /* @param = props  현재 MyComponent를 호출하는 부모컴포넌트는 ./App  */
//     return <div>
//                 안녕하세요, 제이름은 {props.name}입니다.<br/>
//                 children 값은 {props.children} 입니다.
//            </div>

// }

//3.3.5 비구조화 할당 문법을 통해 props 내부 값 추출하기
const MyComponent = props => {
    const {name, favoritNumber, children} = props;  // props.name , props.children 비구조화 할당
    return (
        <>
            안녕하세요 제이름은 {name} 입니다.< br/>
            children 값은 {children} 입니다. < br/>
            좋아하는 숫자는 {favoritNumber} 입니다. < br/>
        </>  
    )
}

// MyComponent.defaultProps - props default 지정, MyComponent.propTypes - props type 및 필수값 지정

// 3.3.3 props 기본값 설정 : defaultProps
MyComponent.defaultProps = { // 호출하는 부모 컴포넌트에서 props 값을 명시하지 않을 경우 default value
    name :'이용빈',  // name props default
    favoritNumber : 111,
    children : 'go hard'
};

//3.3.6.1 isRequired를 사용하여 필수 propTypes 설정
MyComponent.propTypes = {   //propType 설정 
    name : PropTypes.string, //name 값은 무조건 string 형태로 지정
    favoritNumber : PropTypes.number.isRequired // favoritNumber에 숫자 필수 입력
};


export default MyComponent;