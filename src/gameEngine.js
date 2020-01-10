import readlineSync from 'readline-sync';

const COUNT_OF_GAMES = 3;

const makeGame = (getQuestionAndAnswerFromGame, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  let winGames = 0;

  for (let i = 0; i < COUNT_OF_GAMES; i += 1) {
    const { question, answer: expectedAnswer } = getQuestionAndAnswerFromGame();
    console.log(`Question: ${question}`);
    const actualAnswer = readlineSync.question('Your answer: ');
    if (actualAnswer === expectedAnswer) {
      console.log('Correct!\n');
      winGames += 1;
    } else {
      console.log(`\n'${actualAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!\n`);
      break;
    }
  }

  if (winGames === COUNT_OF_GAMES) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default makeGame;
