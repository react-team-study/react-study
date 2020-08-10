import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true // 문자열 맨 앞에 ?생략
    })
    const showDetail = query.detail === 'true'; // query 파싱 결과 값은 문자열
    // console.log(query);
    return (
        <div>
            <h1>소개</h1>
            <p>
                이 프로젝트는 리액트 라우터 기초를 실습해보는 프로젝트입니다.
            </p>
            {showDetail && <p>detail값을 true로 설정하셨네요!</p>}
        </div>
    );
};

export default About;
