import React,{Component} from 'react';
import '../ValidationSample.css';

class ValidationSample extends Component{
    // 5.1.1 예제 컴포넌트 생성

    state ={ // class에서 state 제어하기 @password, @clicked, @validated
        password : '',
        clicked : false,
        validated : false
    }

    handleChange = (e) => { // e : 합성이벤트를 통해 input박스 값에 접근하기
        this.setState({
            password : e.target.value //password state에 입력한 값을 넣는다.
        });
    }

    handleButtonClick = () => {
        console.log(this.state.password === '0000');
        this.setState({
            clicked : true, // 클릭 여부
            validated : this.state.password === '0000' // password state값이 0000 이면 true 반환
        });
        this.input.focus();

    }

    render(){
        return (
            <>
                <input 
                    ref = {(ref) => this.input=ref}
                    name ="password"
                    value={this.state.password} // class에서 생성된 component 접근
                    onChange={this.handleChange}// 호출자의 handleChange객체 접근 
                    className={this.state.click ? (this.state.validated? 'success' : 'fail') : ''} // 클릭시 input box입력값이 0000이면 success , 아니면 fail 반환
                />
                <button onClick={this.handleButtonClick}>검증</button>
            </>
        )
    }
}

export default ValidationSample;