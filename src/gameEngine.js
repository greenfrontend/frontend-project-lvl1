import readlineSync from 'readline-sync';

const GAMES_COUNT = 3;

const makeGame = (getQuestionAndAnswerFromGame, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < GAMES_COUNT; i += 1) {
    const { question, answer: expectedAnswer } = getQuestionAndAnswerFromGame();
    console.log(`Question: ${question}`);
    const actualAnswer = readlineSync.question('Your answer: ');

    if (actualAnswer !== expectedAnswer) {
      console.log(`\n'${actualAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!\n`);
      return;
    }
    console.log('Correct!\n');
  }

  console.log(`Congratulations, ${name}!`);
};

export default makeGame;
