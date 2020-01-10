import makeGame from '../gameEngine';
import generateRandomInteger from '../utils';

const MIN_DELTA_INTEGER = -10;
const MAX_DELTA_INTEGER = 10;
const PROGRESSION_SIZE = 10;

const description = 'What number is missing in the progression?\n';

const generateProgressionArray = (startNumber, delta, size) => {
  const result = [];
  for (let i = 0; i < size; i += 1) {
    result.push(startNumber + i * delta);
  }
  return result;
};

const getQuestionAndAnswerFromGame = () => {
  const startNumber = generateRandomInteger();
  const delta = generateRandomInteger(MIN_DELTA_INTEGER, MAX_DELTA_INTEGER);
  const progression = generateProgressionArray(startNumber, delta, PROGRESSION_SIZE);
  const randomIndex = generateRandomInteger(0, progression.length - 1);
  const progressionWithoutNumber = progression
    .map((number, index) => (index === randomIndex ? '..' : number));

  const question = progressionWithoutNumber.join(' ');
  const answer = String(progression[randomIndex]);

  return { question, answer };
};

export default () => makeGame(getQuestionAndAnswerFromGame, description);
