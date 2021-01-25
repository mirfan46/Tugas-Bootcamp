#!/usr/bin/env node

const { program } = require("@caporal/core");

program
  .command("lowercase", "To lowercase text")
  .argument("<text>", "String Transformation")
  .alias("l")
  .action(({ logger, args }) => {
    logger.info("lowercase");
    logger.info(args.text.toLowerCase());
  });

program
  .command("uppercase", "To uppercase text")
  .argument("<text>", "String Transformation")
  .alias("u")
  .action(({ logger, args }) => {
    logger.info("uppercase");
    logger.info(args.text.toUpperCase());
  });

program
  .command("capitalize", "To capitalize text")
  .argument("<text>", "String Transformation")
  .alias("c")
  .action(({ logger, args }) => {
    logger.info("capitalize");
    let capitalize = args.text
      .toLowerCase()
      .split(" ")
      .map((word) => {
        if (word.length > 1) return word[0].toUpperCase() + word.substr(1);
        else return word.toUpperCase();
      })
      .join(" ");
    logger.info(capitalize);
  });

program.run();

// program
//   .argument("<name>", "Name to greet")
//   .option("--uppercase", "to uppercase text")
//   .argument("say", "Say something", { default: "Apa kabar?" })
//   .argument("number...", "bring number")

//   .action(({ logger, options, args }) => {
//     let totalNumber = 0;
//     args.number.reduce(function (accumulator, currentValue) {
//       return (totalNumber = accumulator + currentValue);
//     }, 0);

//     if (options.uppercase) {
//       logger.info(args.name.toUpperCase());
//     } else {
//       logger.info(args.name);
//     }
//     logger.info("Hello, %s!", args.name);
//     logger.info(args.say);
//     logger.info(args.number);
//     logger.info(totalNumber);
//   });

// program.run();
