import makeGame from '../gameEngine';
import generateRandomInteger from '../utils';

const description = 'What is the result of the expression?';

const arithmeticOperator = ['+', '-', '*'];

const generateRandomSign = (signs) => {
  const randomIndex = generateRandomInteger(0, signs.length - 1);
  return signs[randomIndex];
};

const calculate = (number1, number2, sign) => {
  switch (sign) {
    case '-':
      return number1 - number2;
    case '+':
      return number1 + number2;
    case '*':
      return number1 * number2;
    default:
      return false;
  }
};

const getQuestionAndAnswerFromGame = () => {
  const number1 = generateRandomInteger();
  const number2 = generateRandomInteger();
  const sign = generateRandomSign(arithmeticOperator);

  const question = `${number1} ${sign} ${number2}`;
  const answer = String(calculate(number1, number2, sign));

  return { question, answer };
};

export default () => makeGame(getQuestionAndAnswerFromGame, description);
