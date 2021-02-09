import instance from './api';

const getPosts = async () => {
  const data = await instance.get('posts');
  return data.data;
};

export {getPosts};
export default {};
