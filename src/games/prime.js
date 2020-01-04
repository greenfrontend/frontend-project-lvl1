import { generateRandomInteger } from '../utils';

const MIN_RANDOM_INTEGER = 1;
const MAX_RANDOM_INTEGER = 100;

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const makeGame = () => {
  const number = generateRandomInteger(MIN_RANDOM_INTEGER, MAX_RANDOM_INTEGER);
  const question = `${number}`;
  const answer = isPrime(number) ? 'yes' : 'no';

  return { question, answer };
};

export { makeGame as default, description };
