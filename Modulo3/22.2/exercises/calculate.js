module.exports = function calculate(a, b, c) {
  return new Promise((resolve, reject) => {
    typeof (a + b + c) !== "number" && reject("Informe apenas números");
    const result = (a + b) * c;
    result < 50 && reject("Valor muito baixo");
    resolve(result);
  });
}
