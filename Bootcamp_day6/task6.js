#!/usr/bin/env node
const os = require("os");
const { program } = require("@caporal/core");

program
  .command("ip", "Get IP Address in private network")
  .alias("i")
  .action(({ logger, args }) => {
    logger.info("ip address");
    let network = os.networkInterfaces();
    console.log(network);

    const results = Object.create(null); // Or just '{}', an empty object

    for (const name of Object.keys(network)) {
      for (const net of network[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === "IPv4" && !net.internal) {
          if (!results[name]) {
            results[name] = [];
          }
          results[name].push(net.address);
        }
      }
    }
    console.log(results);
  });

program.run();
