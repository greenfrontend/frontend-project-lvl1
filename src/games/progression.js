import generateRandomInteger from '../utils';

const MIN_DELTA_INTEGER = -10;
const MAX_DELTA_INTEGER = 10;

const PROGRESSION_SIZE = 10;

const description = 'What number is missing in the progression?\n';

const generatePregressionArray = () => {
  const delta = generateRandomInteger(MIN_DELTA_INTEGER, MAX_DELTA_INTEGER);
  const startNumber = generateRandomInteger();

  const result = [];
  for (let i = 0; i < PROGRESSION_SIZE; i += 1) {
    result.push(startNumber + i * delta);
  }

  return result;
};

const makeGame = () => {
  const progression = generatePregressionArray();
  const randomIndex = generateRandomInteger(0, progression.length);
  const progressionWithoutNumber = progression
    .map((number, index) => (index === randomIndex ? '..' : number));

  const question = progressionWithoutNumber.join(' ');
  const answer = String(progression[randomIndex]);

  return { question, answer };
};

export { makeGame as default, description };
