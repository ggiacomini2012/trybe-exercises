const calculate = require("./calculate.js")

let start = new Date();
calculate(10, 10, 10)
  .then((resolve) => console.log("1", new Date() - start, resolve))
  .catch((error) => console.log("1", new Date() - start, error));

let start2 = new Date();
calculate(10, 10, 10)
  .then((resolve) => console.log("2", new Date() - start2, resolve))
  .catch((error) => console.log("2", new Date() - start2, error));

let start3 = new Date();
calculate(10, 10, 10)
  .then((resolve) => console.log("3", new Date() - start3, resolve))
  .catch((error) => console.log("3", new Date() - start3, error));

async function exampleAsync() {
  try {
    let start4 = new Date();
    const lur = await calculate(10, 10, 10);
    console.log("4", new Date() - start4, lur);
  } catch (error) {
    let start4 = new Date();
    console.log("4", new Date() - start4, error);
  }
}

exampleAsync();
