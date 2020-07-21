import React from 'react';
import {withRouter} from 'react-router-dom'; 
// 라우트에 사용된 컴포넌트가 아니여도 location, match, history 객체에 접근할수 있도록함

const WithRouterSample = ({location, match, history}) =>{
    return (
        <div>
            <h4>location</h4>
            <textarea
                value= {JSON.stringify(location,null,2)}    // json 객체 들여쓰기
                rows = {7}
                readOnly = {true}
            />
            <h4>match</h4>
            <textarea
                value={JSON.stringify(match,null,2)}
                rows={7}
                readOnly={true}
            />
            <button onClick={() => history.push('/')}>home</button>
        </div>
    )

}

export default withRouter(WithRouterSample);