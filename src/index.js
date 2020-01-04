import readlineSync from 'readline-sync';

const sayHelloToUser = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

export default sayHelloToUser;
