import generateRandomInteger from '../utils';

const description = 'What is the result of the expression?\n';

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

const makeGame = () => {
  const number1 = generateRandomInteger();
  const number2 = generateRandomInteger();
  const sign = generateRandomSign();

  const question = `${number1} ${sign} ${number2}`;
  const answer = String(calculate(number1, number2, sign));

  return { question, answer };
};

export { makeGame as default, description };
