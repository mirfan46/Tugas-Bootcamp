const axios = require("axios");
const logger = require("./task3Logger");

class Fetcher {
  constructor() {}

  getData = async (url) => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  deleteData = async (url) => {
    try {
      const response = await axios.delete(url);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  postData = async (url, data) => {
    try {
      const response = await axios.post(url, data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  putData = async (url, data) => {
    try {
      const response = await axios.put(url, data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  patchData = async (url, data) => {
    try {
      const response = await axios.patch(url, data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}

const myFetcher = new Fetcher();

async function callAllFatcher() {
  var getJsonResponse = await myFetcher.getData("https://httpbin.org/get");

  var deleteJsonResponse = await myFetcher.deleteData(
    "https://httpbin.org/delete?id=30"
  );

  var jsonData = {
    id: 1,
    name: "BangIrfan",
  };

  var postJsonResponse = await myFetcher.postData(
    "https://httpbin.org/post",
    jsonData
  );

  var putJsonResponse = await myFetcher.putData(
    "https://httpbin.org/put",
    jsonData
  );

  logger.log("info", `sukses update data : ${jsonData.name}`);

  putJsonResponse;

  var patchJsonResponse = await myFetcher.patchData(
    "https://httpbin.org/patch",
    jsonData
  );
}

callAllFatcher();
