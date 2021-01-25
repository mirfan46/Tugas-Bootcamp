const cheerio = require("cheerio");
const axios = require("axios").default;

const fethHtml = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch {
    console.error(
      `ERROR: An error occurred while trying to fetch the URL: ${url}`
    );
  }
};

const extractDeal = (selector) => {
  const title = selector
    .find(".headline ga--headline clearfix")
    .find("div[class='headline__big__box'] > h2[class='headline__big__title']")
    .text()
    .trim();

  const link = selector.attr("href").trim();

  return {
    title,
    link,
  };
};

const scrapSteam = async () => {
  const kompasUrl = "https://www.kompas.com/";

  const html = await fethHtml(kompasUrl);

  const selector = cheerio.load(html);

  const searchResults = selector("body").find(
    "#search_result_container > #search_resultsRows > a"
  );

  const deals = searchResults
    .map((idx, el) => {
      const elementSelector = selector(el);
      return extractDeal(elementSelector);
    })
    .get();

  return deals;
};

const hasil = async () => {
  const result = await scrapSteam();
  console.log(result);
};

hasil();
