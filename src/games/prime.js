import makeGame from '../gameEngine';
import generateRandomInteger from '../utils';

const MIN_RANDOM_INTEGER = 1;
const MAX_RANDOM_INTEGER = 100;

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswerFromGame = () => {
  const number = generateRandomInteger(MIN_RANDOM_INTEGER, MAX_RANDOM_INTEGER);
  const question = `${number}`;
  const answer = isPrime(number) ? 'yes' : 'no';

  return { question, answer };
};

export default () => makeGame(getQuestionAndAnswerFromGame, description);
