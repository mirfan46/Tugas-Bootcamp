const axios = require("axios");
const cheerio = require("cheerio");
let title, url;

getContent = async (url) => {
  axios
    .get(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);

      console.log("");
      title = $(".headline__thumb__item").text().trim();
      console.log(title);
    })
    .catch((error) => {
      console.log(error);
    });
};

//execute query
getContent("https://www.kompas.com");
