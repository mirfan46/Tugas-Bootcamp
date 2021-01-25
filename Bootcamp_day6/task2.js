#!/usr/bin/env node

const { program } = require("@caporal/core");

program
  .command("add", "penjumlahan")
  .argument("<number...>", "Please input number")
  .alias("+")
  .action(({ logger, args }) => {
    logger.info("penjumlahan");
    let totalNumber = 0;
    args.number.reduce(function (accumulator, currentValue) {
      return (totalNumber = accumulator + currentValue);
    });

    logger.info(totalNumber);
  });

program
  .command("subtract", "pengurangan")
  .argument("<number...>", "Please input number")
  .alias("sub")
  .action(({ logger, args }) => {
    logger.info("pengurangan");
    let hasil = 0;
    args.number.reduce(function (accumulator, currentValue) {
      return (hasil = accumulator - currentValue);
    });

    logger.info(hasil);
  });

program
  .command("multiply", "perkalian")
  .argument("<number...>", "Please input number")
  .alias("mul")
  .action(({ logger, args }) => {
    logger.info("Perkalian");
    const perkalian = args.number.reduce((accumulator, currentValue) => {
      return accumulator * currentValue;
    });

    logger.info(perkalian);
  });

program
  .command("devide", "pembagian")
  .argument("<number...>", "Please input number")
  .alias("dev")
  .action(({ logger, args }) => {
    logger.info("Pembagian");
    const pembagian = args.number.reduce((accumulator, currentValue) => {
      return accumulator / currentValue;
    });

    logger.info(pembagian);
  });

program.run();
