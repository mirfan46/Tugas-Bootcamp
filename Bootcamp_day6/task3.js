#!/usr/bin/env node

const { program } = require("@caporal/core");

program
  .command("polindrom", "check polindrom")
  .argument("<word>", "please input a sentence")
  .alias("pol")
  .action(({ logger, args }) => {
    logger.info(`String: ${args.word}`);
    let polindrom = args.word.split("").reverse().join("");
    return args.word.toLowerCase() === polindrom.toLowerCase()
      ? logger.info(`Is palindrome? Yes`)
      : logger.info(`Is palindrome? No`);
  });

program.run();
