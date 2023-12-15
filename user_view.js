const fs = require("fs").promises;
const { EOL } = require("os");
const { readFile, readAnswers } = require("./user_model.js");
const inquirer = require("inquirer");

// console.log(readFile())
// readFile()

async function fileReader() {
  const readFile1 = await readFile();
  // console.log(readFile1);
  
async function ballsSum () {
}

let resultSum = 0
await inquirer
      .prompt([])
  for (let i = 0; i < readFile1.length; i += 1) {
   
    const imageView = await fs.readFile(`${readFile1[i].image}`, "utf-8").then((el) => el)
    console.clear()
    await inquirer
      .prompt([
        {
          type: "list",
          name: `Вы заработали `,
          message: `${imageView}${EOL}${readFile1[i].question}`,
          choices: [
            { name: `${readFile1[i].answers[0]}`, value: `${resultSum += readFile1[i].balls[0]}` },
            { name: `${readFile1[i].answers[1]}`, value: `${resultSum +=readFile1[i].balls[1]}` },
            { name: `${readFile1[i].answers[2]}`, value: `${resultSum +=readFile1[i].balls[2]}` },
          ],
        },
      ])
      .then((answer) => console.log(answer));
      
  }
  console.log(`Vi zarabotali ${resultSum} o4k0v, moi pupsiki`);
}

fileReader();



