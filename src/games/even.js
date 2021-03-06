import makeGame from '../gameEngine';
import generateRandomInteger from '../utils';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswerFromGame = () => {
  const number = generateRandomInteger();
  const question = number.toString();
  const answer = isEven(number) ? 'yes' : 'no';

  return { question, answer };
};

export default () => makeGame(getQuestionAndAnswerFromGame, description);
