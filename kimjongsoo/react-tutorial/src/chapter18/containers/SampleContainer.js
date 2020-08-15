import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Sample from '../components/Sample';
// import { getPost, getUsers } from '../modules/sample';
import { getPost, getUsers } from '../modules/sagaSample';

const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}) => {
  useEffect(() => {
    getPost(1);
    getUsers(1);
  }, [getPost, getUsers]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

/**
 * redux-thunk
 */
// export default SampleContainer;
// export default connect(
//     ({ sample, loading }) => ({
//       post: sample.post,
//       users: sample.users,
//       // loadingPost: sample.loading.GET_POST,
//       // loadingUsers: sample.loading.GET_USERS,
//       loadingPost: loading['sample/GET_POST'],
//       loadingUsers: loading['sample/GET_USERS'],
//     }),
//   {
//     getPost,
//     getUsers,
//   },
// )(SampleContainer);

/**
 * redux-saga
 */
export default connect(
  ({ sagaSample, loading }) => ({
    post: sagaSample.post,
    users: sagaSample.users,
    // loadingPost: sample.loading.GET_POST,
    // loadingUsers: sample.loading.GET_USERS,
    loadingPost: loading['sample/GET_POST'],
    loadingUsers: loading['sample/GET_USERS'],
  }),
  {
    getPost,
    getUsers,
  },
)(SampleContainer);
