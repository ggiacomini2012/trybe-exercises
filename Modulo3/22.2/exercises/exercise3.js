const calculate = require("./calculate.js")
const [one, two, three] = require("./randomNum.js")

async function exampleAsync() {
  try {
    const result = await calculate(one, two, three);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

exampleAsync();

