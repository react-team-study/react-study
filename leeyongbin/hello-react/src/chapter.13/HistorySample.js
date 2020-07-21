import React, {Component} from 'react';

class HistorySample extends Component {

    //뒤로가기
    HandleGoBack = () => {
        this.props.history.goBack();
    };

    // 홈으로 이동
    HandleGoHome = () => {
        this.props.history.push("/");
    };

    componentDidMount(){
        // 이것을 설정하고 나면 페이지에 변화가 생기려고 할 때 마다 정말 나갈 것인지를 질문함
        this.unblock = this.props.history.block('정말 떠나실건가요?');
    };

    componentWillMount(){
        //컴포넌트가 언마운트되면 질문을 멈춤
        if(this.unlock){
            this.unblock();
        }
    }

    render() {
        return (
           <div>
               <button onClick={this.HandleGoBack}>back</button>
               <button onClick={this.HandleGoHome}>Home</button>
           </div>     
        )
    }
    
}

export default HistorySample;