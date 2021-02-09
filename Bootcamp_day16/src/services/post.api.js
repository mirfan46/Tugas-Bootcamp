import instance from './base';

const getPosts = async () => {
  const data = await instance.get('posts');
  return data.data;
};

export {getPosts};
export default {};
