const fs = require("fs");

fs.promises
  .readdir("/g")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
