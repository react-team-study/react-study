import React,{Component} from 'react';


//5.2.2 CreateRef를 통한 ref 설정
class createRef extends Component{

    input = React.createRef();

    handleFocus = () => {
        this.input.current.focus();
    }

    render(){
        return (
            <div>
                <input ref={this.input}/>
            </div>
        );
    };

}