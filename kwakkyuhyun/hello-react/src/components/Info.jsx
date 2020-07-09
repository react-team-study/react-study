import React, { useState } from 'react';
import styles from './Info.module.scss';
import BaseLayout from './BaseLayout';
import useInput from './useInput';

const Info = () => {
    const [ state, onChange ] = useInput({ name: '', nickname: '', })
    const [ visible, setVisible ] = useState(false);
    const { name, nickname } = state;
    
    // // useEffect => 렌더링 된 직후 실행
    // // 2번째 인자로 빈배열[] 넘겨주면 마운트 될 때만 실행
    // // [특정값]을 넣어주면 특정값이 변경될때만 실행
    // useEffect(() => {
    //     console.log('useEffect');
    //     return () => {
    //         console.log('cleanup');
    //         console.log(name);
    //     }
    // }, [name]);
    
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
                        name="name"
                        value={name}
                        onChange={onChange}
                        placeholder="이름을 입력해주세요."
                    />
                    <input
                        type="text"
                        className={styles.input}
                        name="nickname"
                        value={nickname}
                        onChange={onChange}
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
