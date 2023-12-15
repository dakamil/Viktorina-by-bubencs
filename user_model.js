const fs = require("fs").promises
const {EOL} = require("os")



async function readFile (){
const read = JSON.parse(await fs.readFile(`${__dirname}/questions.json`, 'utf-8'))

return  read
}

async function readAnswers (ansdwers) {
if (ansdwers===true) {
    return 'Вы ответили правильно! Плюс 5 баллов!'
} else {
    return "К сожалению, ответ не верный."
}
}

module.exports = {readFile, readAnswers}