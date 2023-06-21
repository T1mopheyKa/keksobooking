const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomArray = (array) => array[getRandomNumber(0, array.length - 1)];

const getRandomDecimalNumber = (min, max, decimalSeparator) => {

  min < 0 ? min = Math.abs(min) : min;
  max < 0 ? max = Math.abs(max) : max;
  decimalSeparator < 0 ? decimalSeparator = Math.abs(decimalSeparator) : decimalSeparator;

  if (min >= max) {
    [min, max] = [max, min];
  }

  const remain = Math.random();
  const randomNumber = +(remain * (max - min) + min).toFixed(decimalSeparator);
  return min === max ? randomNumber + remain : randomNumber;
}

export {
  getRandomDecimalNumber,
  getRandomNumber,
  getRandomArray
};
