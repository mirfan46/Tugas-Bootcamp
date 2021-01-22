const axios = require("axios");

let posts = [];
let users = [];
let objJoined = [];

const getPost = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    posts = response.data;
  } catch (error) {
    console.log(error);
  }
};

const getUser = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    users = response.data;
  } catch (error) {
    console.log(error);
  }
};

const doJoin = async () => {
  let i,
    j = 0;
  for (i = 0; i < posts.length; i++) {
    for (j = 0; j < users.length; j++) {
      if (posts[i].userId === users[j].id) {
        let temp = { Users: users[j] };
        let merged = Object.assign({}, posts[i], temp);
        objJoined.push(merged);
      }
    }
  }

  console.log(objJoined);
};

const getAllData = async () => {
  const A = await getPost();
  const B = await getUser(A);
  const C = await doJoin(B);
};
getAllData();
