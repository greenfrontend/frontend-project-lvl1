import { generateRandomInteger } from '../utils';

const description = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const isEven = (number) => number % 2 === 0;

const makeGame = () => {
  const number = generateRandomInteger();
  const question = `${number}`;
  const answer = isEven(number) ? 'yes' : 'no';

  return { question, answer };
};

export { makeGame as default, description };
