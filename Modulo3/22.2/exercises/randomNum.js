module.exports = randomNumbers = Array.from({ length: 3 },
  () => Math.floor(Math.random() * 100 + 1));