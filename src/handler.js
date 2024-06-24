module.exports.generateRandomNumer = (event) => {
  const randomNumber = parseInt(Math.random() * 100);
  console.log("The random generated number is: ", randomNumber);
  return randomNumber;
};
