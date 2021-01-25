#!/usr/bin/env node

const { program } = require("@caporal/core");

program
  .command("random", "make random String")
  .option("--length", "number")
  .alias("obf")
  .action(({ logger, args }) => {
    logger.info("obfuscate");
  });

program.run();
