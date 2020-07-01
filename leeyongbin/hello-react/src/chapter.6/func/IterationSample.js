import React, {useState} from 'react';

// 6.3 key
// const IterationSample = () => {
//     const names = ['눈사람','얼음','눈','바람'];
//     const nameList = names.map((name,index)=> <li key={index}>{name}</li>);
//     return <ul>{nameList}</ul>
// }

//6.4.1 초기 상태 설정 하기
// const IterationSample = () => {
//     const[names,setNames] = useState([
//         { id : 1, text : '눈사람'},
//         { id : 2, text : '얼음'},
//         { id : 3, text : '눈'},
//         { id : 4, text : '바람'},
//     ]);

//     const [inputText, setInputText] = useState('');
//     const [nextId, setNextId] = useState(5);

// const nameList = names.map( name => <li key={name.id}>{name.text}</li>);

// return <ul>{nameList}</ul>

// };

//6.4.2 데이터 추가 기능 구현하기
const IterationSample = () => {
    const [names,setNames] = useState([
        { id : 1, text : '눈사람'},
        { id : 2, text : '얼음'},
        { id : 3, text : '눈'},
        { id : 4, text : '비'},
    ]);
    
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);

    //data insert
    const onClick = () => {
        const nextNames = names.concat({
            id :nextId ,
            text : inputText,
        });
        setNextId(nextId + 1);
        setNames(nextNames); // id, text 
        setInputText('');
    };

    //data delete
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const nameList = names.map( name =>
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    );
    
    return ( 
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    )

}

export default IterationSample;
