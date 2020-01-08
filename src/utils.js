// The maximum is exclusive and the minimum is inclusive [1, 10)
const generateRandomInteger = (from = 1, to = 10) => {
  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min)) + min;
};

export default generateRandomInteger;
