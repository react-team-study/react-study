import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  console.log(location);
  console.log(query);

  const showDetail = query.detail === 'true';
  return (
    <div>
      <h1>About</h1>
      <p>React is Good.</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요</p>}
    </div>
  );
};

export default About;
