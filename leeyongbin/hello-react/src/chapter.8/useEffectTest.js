import React, {useState, useEffect} from 'react';
/* UseEffect는 랜더링될때마다 특정작업을 할수 있는 Hook */
const useEffectTest = () => {
    const[name,setName] = useState('');
    const[nickname, setNickname]  = useState('');

    useEffect(() => {
        console.log('렌더링이 완료 되었습니다.');
        console.log({ name, nickname, });
        return () => { // 뒷정리하기
            console.log('cleanup');
            console.log(name); 
        }
    },[name]); //name 값이 변경시에만 랜더링

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickname = e =>{
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input type="text" value={name} onChange={onChangeName}/>
                <input type="text" value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <p>이름 : </p> {name}
            </div>
            <div>
                <p>닉네임 : </p> {nickname}
            </div>            
        </div>
    )
}

export default useEffectTest;