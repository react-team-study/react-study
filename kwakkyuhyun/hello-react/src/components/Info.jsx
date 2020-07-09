import React, { useState, useEffect } from 'react';
import styles from './Info.module.scss';
import BaseLayout from './BaseLayout';

const Info = () => {
    const [ name, setName ] = useState('');
    const [ nickname, setNickname ] = useState('');
    const [ visible, setVisible ] = useState(false);
    
    // useEffect => 렌더링 된 직후 실행
    // 2번째 인자로 빈배열[] 넘겨주면 마운트 될 때만 실행
    // [특정값]을 넣어주면 특정값이 변경될때만 실행
    useEffect(() => {
        console.log('useEffect');
        return () => {
            console.log('cleanup');
            console.log(name);
        }
    }, [name]);
    
    const onChangeName = e => {
        setName(e.target.value);
    };
    
    const onChangeNickname = e => {
        setNickname(e.target.value);
    };
    
    const onChangeVisible = () => {
        if(visible) {
            setVisible(false);
        }
        else {
            setVisible(true);
        }
    }
    
    return (
        <BaseLayout title={'useState 여러번 사용'}>
            <button type="button" className={styles.button} onClick={onChangeVisible}>
                {visible ? '숨기기' : '보이기'}
            </button>
            {visible && (
                <>
                    <input
                        type="text"
                        className={styles.input}
                        value={name}
                        onChange={onChangeName}
                        placeholder="이름을 입력해주세요."
                    />
                    <input
                        type="text"
                        className={styles.input}
                        value={nickname}
                        onChange={onChangeNickname}
                        placeholder="닉네임을 입력해주세요."
                    />
                    <strong className={styles.text}>이름: {name}</strong>
                    <strong className={styles.text}>닉네임: {nickname}</strong>
                </>
            )}
        </BaseLayout>
    );
};

export default Info;
