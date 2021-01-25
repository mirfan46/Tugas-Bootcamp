#!/usr/bin/env node
const http = require("http");
const { program } = require("@caporal/core");

program
  .command("ip-external", "get public ip address")
  .alias("ipex")
  .action(({ logger, args }) => {
    logger.info("ip external");

    var options = {
      host: "ipv4bot.whatismyipaddress.com",
      port: 80,
      path: "/",
    };

    http
      .get(options, function (res) {
        console.log("status: " + res.statusCode);

        res.on("data", function (chunk) {
          console.log("BODY: " + chunk);
        });
      })
      .on("error", function (e) {
        console.log("error: " + e.message);
      });
  });

program.run();
