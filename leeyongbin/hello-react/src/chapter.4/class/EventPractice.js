import React, {Component} from 'react';


class EventPractice extends Component {
    
    //4.2.2.1 Onchange 설정
    //4.2.2.2 state에 input 값 담기
    // state = {
    //     message : ''
    // }

    // render() {
    //     return (
    //         <div>
    //             <h1>이벤트 연습</h1>
    //             <input 
    //                 type="text"
    //                 name="message"
    //                 placeholder="아무거나 입력해 보세요"
    //                 value={this.state.message}                    
    //                 //4.2.2.1 Onchange 설정
    //                 onChange={
    //                     (e) => {    // SystheticEvent
    //                         this.setState({
    //                             message : e.target.value
    //                         })
    //                     }
    //                 }   
    //              />
    //              <button onClick={() => {alert(this.state.message); this.setState({message :''})}}>확인</button>
    //         </div>
    //     );
    // }

    //4.2.3 임의 메서드 만들기 
    // constructor(props){
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleChange(e){
    //     this.setState({
    //         message : e.target.value
    //     });
    // }
    
    // handleClick() {
    //     alert(this.state.message);
    //     this.setState({
    //         message : ''
    //     });
    // }

    // render() {
    //     return (
    //         <div>
    //             <h1>이벤트 연습</h1>
    //             <input 
    //                 type="text"
    //                 name="message"
    //                 placeholder="아무거나 입력해 보세요"
    //                 vlaue={this.state.message}
    //                 onChange={this.handleChange}
    //             />
    //             <button onClick={this.handleClick}>확인</button>
    //         </div>
    //     )
    // }

    //4.2.3.2 Property Initializer Syntax를 사용한 메서드 작성
    state = {
        message : '',
        username :''
    }
    // e : 합성 이벤트 => 이벤트가 끝나면 초기화 된다.
    // handleChange = (e) => { // transform-calss-properties 문법
    //     this.setState({
    //         message : e.target.value
    //     });
    // }

    // onChangeEvent 
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    //onClick Event
    handleClick = () => {
        alert(this.state.message +' '+ this.state.username);
        this.setState({
            message : '',
            username : ''
        });
    }

    // onKeyPress Event
    handleKeyPress = (e) => {
        if(e.key === 'Enter' || e.key === '13') this.handleClick();
    }


    render(){
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input name="message" type="text" value={this.state.username} placeholder="사용자명" onChange={this.handleChange}/>
                <input name="message" type="text" value={this.state.message} placeholder="아무거나 입력하세요" onChange={this.handleChange} onKeyPress={this.onKeyPress}/>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}

export default EventPractice;