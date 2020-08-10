import React from 'react';

const data = {
    kyuhyeon: {
        name: '곽규현',
        description: '리액트 공부하는 UI개발자',
    },
    velopert: {
        name: '김민준',
        description: '리액트를 좋아하는 개발자',
    },
}

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    if(!profile) {
        return <div>존재하지 않는 사용자입니다.</div>
    }
    return (
        <div>
            <h2>{username}({profile.name})</h2>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;
