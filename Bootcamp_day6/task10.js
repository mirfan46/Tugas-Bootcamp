const axios = require("axios");

const sendGetRequest = async () => {
  try {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return resp.data.length;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

// sendGetRequest();

module.exports = sendGetRequest;

// const getNumberOfArray = async () => {
//   let data = await sendGetRequest();
//   const arrayData = data.length;
//   console.log(arrayData);
// };

// getNumberOfArray();
