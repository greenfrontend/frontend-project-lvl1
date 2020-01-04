// The maximum is exclusive and the minimum is inclusive [1, 10)
const generateRandomInteger = (from = 1, to = 10) => {
  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min)) + min;
};

const generateRandomSign = () => {
  const signs = ['+', '-', '*'];
  const randomIndex = generateRandomInteger(0, signs.length);
  return signs[randomIndex];
};

const calculate = (number1, number2, sign) => {
  if (sign === '-') return number1 - number2;
  if (sign === '+') return number1 + number2;
  if (sign === '*') return number1 * number2;
  return number1 + number2;
};

export { generateRandomInteger, generateRandomSign, calculate };
