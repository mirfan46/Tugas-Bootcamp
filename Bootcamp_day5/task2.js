const puppeteer = require("puppeteer");
const logger = require("./task3Logger");

async function scrapeMovieData(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  logger.log("info", `sukses ambil data dari : ${url}`);

  // Judul
  const [el] = await page.$x(
    "/html/body/div[2]/div/div[2]/div/div[1]/div[2]/div[1]"
  );
  const txt = await el.getProperty("textContent");
  const judul = await txt.jsonValue();

  // Starring
  const [el2] = await page.$x(
    "/html/body/div[2]/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/ul/li[1]"
  );
  const txt2 = await el2.getProperty("textContent");
  const starring = await txt2.jsonValue();

  // Director
  const [el3] = await page.$x(
    "/html/body/div[2]/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/ul/li[2]"
  );
  const txt3 = await el3.getProperty("textContent");
  const director = await txt3.jsonValue();

  // Censor Rating
  const [el4] = await page.$x(
    "/html/body/div[2]/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/ul/li[3]"
  );
  const txt4 = await el4.getProperty("textContent");
  const sensorRating = await txt4.jsonValue();

  // Genre
  const [el5] = await page.$x(
    "/html/body/div[2]/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/ul/li[4]"
  );
  const txt5 = await el5.getProperty("textContent");
  const genre = await txt5.jsonValue();

  // language
  const [el6] = await page.$x(
    "/html/body/div[2]/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/ul/li[5]"
  );
  const txt6 = await el6.getProperty("textContent");
  const language = await txt6.jsonValue();

  // Subtitle
  const [el7] = await page.$x(
    "/html/body/div[2]/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/ul/li[6]"
  );
  const txt7 = await el7.getProperty("textContent");
  const subtitle = await txt7.jsonValue();

  // Duration
  const [el8] = await page.$x(
    "/html/body/div[2]/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/ul/li[7]"
  );
  const txt8 = await el8.getProperty("textContent");
  const duration = await txt8.jsonValue();

  // Sinopsis
  const [el9] = await page.$x(
    "/html/body/div[2]/div/div[2]/div/div[1]/div[2]/div[2]/div[2]"
  );
  const txt9 = await el9.getProperty("textContent");
  const sinopsis = await txt9.jsonValue();

  console.log({
    judul,
    starring,
    director,
    sensorRating,
    genre,
    language,
    subtitle,
    duration,
    sinopsis,
  });

  browser.close();
}

scrapeMovieData("https://www.cgv.id/en/movies/info/21000800");
