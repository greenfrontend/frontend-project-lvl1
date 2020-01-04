import readlineSync from 'readline-sync';
import generateRandomInteger from './utils';

const COUNT_OF_GAMES = 3;
const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 20;

const game = (currentGame, name) => {
  const iter = (count, acc) => {
    if (acc === COUNT_OF_GAMES) {
      console.log(`Congratulations, ${name}!`);
      return null;
    }

    const question = generateRandomInteger(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    const expectedAnswer = currentGame(question) ? 'yes' : 'no';

    console.log('Question: ', question);
    const actualAnswer = readlineSync.question('Your answer: ');

    if (actualAnswer !== expectedAnswer) {
      console.log(`\n'${actualAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!\n`);
      return null;
    }

    console.log('Correct!\n');
    return iter(count, acc + 1);
  };
  return iter(COUNT_OF_GAMES, 0);
};

export default game;
