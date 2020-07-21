import React from 'react';
import {withRouter} from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

const data = {
    velopert : {
        name : '김민준',
        description : '리액트를 좋아하는 개발자',
    },
    nextbigthing : {
        name : '이용빈',
        description : 'nodejs를 좋아하는 개발자',
    }
};

const Profile = ({match}) => {  // profile/:username
    const {username} = match.params;
    const profile = data[username];

    if(!profile){
        return <div>존재하지 않는 사용자 입니다.</div>
    }

    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
            <WithRouterSample/>
        </div>
    );

}

export default Profile;
