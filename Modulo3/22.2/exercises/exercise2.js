const calculate = require("./calculate.js")
const [one, two, three] = require("./randomNum.js")

calculate(one, two, three)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));
