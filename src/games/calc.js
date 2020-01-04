import { generateRandomInteger, generateRandomSign, calculate } from '../utils';

const description = 'What is the result of the expression?\n';

const makeGame = () => {
  const number1 = generateRandomInteger();
  const number2 = generateRandomInteger();
  const sign = generateRandomSign();

  const question = `${number1} ${sign} ${number2}`;
  const answer = String(calculate(number1, number2, sign));

  return { question, answer };
};

export { makeGame as default, description };
