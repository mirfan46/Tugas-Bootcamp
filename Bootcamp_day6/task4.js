#!/usr/bin/env node

const { program } = require("@caporal/core");

program
  .command("obfuscate", "make obfuscate")
  .argument("input", "text to obfuscate")
  .alias("obf")
  .action(({ logger, args }) => {
    logger.info("obfuscate");
    let obfuscate = args.input
      .split("")
      .map((e) => {
        return "&#" + e.charCodeAt(0) + ";";
      })
      .join("");

    logger.info(obfuscate);
  });

program.run();
