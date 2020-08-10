import React from 'react';

const History = ({ history }) => {
    const handleGoBack = () => {
        history.goBack();
    }
    const handleGoHome = () => {
        history.push('/');
    }
    return (
        <div>
            <button type='button' onClick={handleGoHome}>홈으로</button>
            <button type='button' onClick={handleGoBack}>뒤로가기</button>
        </div>
    );
};

export default History;
