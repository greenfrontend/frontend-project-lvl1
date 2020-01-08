import generateRandomInteger from '../utils';

const MIN_RANDOM_INTEGER = 10;
const MAX_RANDOM_INTEGER = 40;

const description = 'Find the greatest common divisor of given numbers.\n';

const findGcd = (number1, number2) => {
  let x = Math.abs(number1);
  let y = Math.abs(number2);

  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
};

const makeGame = () => {
  const number1 = generateRandomInteger(MIN_RANDOM_INTEGER, MAX_RANDOM_INTEGER);
  const number2 = generateRandomInteger(MIN_RANDOM_INTEGER, MAX_RANDOM_INTEGER);

  const question = `${number1} ${number2}`;
  const answer = String(findGcd(number1, number2));

  return { question, answer };
};

export { makeGame as default, description };
