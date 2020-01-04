import readlineSync from 'readline-sync';

const COUNT_OF_GAMES = 3;

const game = (currentGame, name) => {
  const iter = (count, acc) => {
    if (acc === COUNT_OF_GAMES) {
      console.log(`Congratulations, ${name}!`);
      return null;
    }

    const { question, answer: expectedAnswer } = currentGame();

    console.log(`Question: ${question}`);
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
