import axios from 'axios';

// export const getPost = (id) => {
//   return axios.get(`https://jsonplaceholer.typicode.com/posts/${id}`);
// };

export const getPost = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getUser = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/users`);
