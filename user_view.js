const fs = require("fs").promises;
const { EOL } = require("os");
const { readFile, readAnswers } = require("./user_model.js");
const inquirer = require("inquirer");

async function fileReader() {
  const readFile1 = await readFile();
  let resultSum = 0;

  for (let i = 0; i < readFile1.length; i += 1) {
    const imageView = await fs.readFile(`${readFile1[i].image}`, "utf-8").then((el) => el);
    console.clear();

    const answer = await inquirer
      .prompt([
        {
          type: "list",
          name: "selectedAnswer",
          message: `${imageView}${EOL}${readFile1[i].question}`,
          choices: [
            { name: `${readFile1[i].answers[0]}`, value: readFile1[i].balls[0] },
            { name: `${readFile1[i].answers[1]}`, value: readFile1[i].balls[1] },
            { name: `${readFile1[i].answers[2]}`, value: readFile1[i].balls[2] },
          ],
        },
      ]);

    resultSum += answer.selectedAnswer;
    console.log(`Vi zarabotali ${resultSum} o4k0v, moi pupsiki`);
  }

  ;
}

fileReader();



