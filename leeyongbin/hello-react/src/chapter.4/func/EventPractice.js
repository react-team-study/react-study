import React,{useState} from 'react';

const EventPractice = () => {
    const[message,setMessage] = useState('');
    const[username,setUsername] = useState('');
    const onClickEvent = () => { alert(message + ' ' + username); setUsername(''); setMessage('');}
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    const onKeyPress = e => { if(e.key ==='13' || e.key ==='Enter') onClickEvent(); }

    return(
        <div>
            <h1>이벤트 연습</h1>
            <input type="text" value={message} onChange={onChangeMessage} />
            <input type="text" value={username} onChange={onChangeUsername} onKeyPress={onKeyPress}/>
            <button onClick={onClickEvent}>확인</button>
        </div>
    );
};

export default EventPractice;