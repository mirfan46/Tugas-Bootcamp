#!/usr/bin/env node

const { program } = require("@caporal/core");
const prog = require("@caporal/core");

program
  .command("random", "Generate random alphanumeric")
  .option("--length", "length of string", prog.INT, 32)
  .option("--letters <bool>", "allow letters or not", prog.BOOLEAN, true)
  .option("--numbers <bool>", "allow numbers or not", prog.BOOLEAN, true)
  .option("--uppercase", "All lettters uppercased", prog.BOOLEAN, false)
  .option("--lowercase", "All letters lowercased", prog.BOOLEAN, false)
  .action((args, options, logger) => {
    logger.info("random");

    let length = options.length;

    logger.info(options);

    let possible = "";

    if (options.letters == true) {
      possible = "ABCDEFGHIJKLMNOPQRSTUVWXyZabcdefghijklmnopqrstuvwxyz";
    }
    if (options.numbers == true) {
      possible += "0123456789";
    }

    let output = "";

    for (let i = 0; i < length; i++) {
      output += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    if (options.uppercase) {
      output = output.toUpperCase();
    }

    if (options.lowercase) {
      output = output.toLowerCase();
    }

    return console.log("output: " + output);
  });

program.run();
