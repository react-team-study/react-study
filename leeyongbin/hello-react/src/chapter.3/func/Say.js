import React, {useState} from 'react';

// 한 컴포넌트에서 useState 여러번 사용하기
const Say = () => {
    const[message,setMessage] = useState('');
    const[color,setColor] = useState('black');
    const onClickEnter = () => {
        setMessage('입장하였습니다.');
    }
    const onClickLeave = () => {
        setMessage('퇴장하였습니다.');
    }

    return (
        <>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color : 'green'}}onClick={() => setColor('red')}>빨간색</button>
            <button style={{color:'green'}}onClick={() => setColor('green')}>초록색</button>
            <button style={{color:'blue'}}onClick={() => setColor('blue')}>파란색</button>
        </>
    )

}

export default Say;