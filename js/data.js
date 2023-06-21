import {
  getRandomDecimalNumber,
  getRandomNumber,
  getRandomArray
} from './util.js';

const FIX_TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const Number = {
  MIN: 1,
  MAX: 10,
};

const Price = {
  MIN: 10000,
  MAX: 150000,
};

const descriptions = [
  'Рядом магазин',
  'Подземный паркинг',
  'Добрые соседи',
  'Тихие соседи',
  'Вид на океан',
  'Солнечная сторона',
];

const photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const titles = [
  'Красивая квартира',
  'Дизайн квартира',
  'Студия',
  '1 комнатная квартира',
  '2 комнатная квартира',
  '3 комнатная квартира',
  'Квартира с Евро-ремонтом',
  'Коммуналка',
];

const houseTypes = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const Room = {
  MIN: 1,
  MAX: 5,
};

const GuestCount = {
  MIN: 0,
  MAX: 5,
};

const getMixArray = (array) => array.map((index) => [Math.random(), index])
  .sort().map((index) => index[1])
  .slice(0, getRandomNumber(1, array.length));

let ads = [];

const createAdvertisement = (index) => {
  ads.push({
    author: {
      avatar: `img/avatars/user${index}.png`,
    },
    offer: {
      title: getRandomArray(titles),
      address: '102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3',
      price: getRandomNumber(Price.MIN, Price.MAX),
      type: getRandomArray(houseTypes),
      rooms: getRandomNumber(Room.MIN, Room.MAX),
      guests: getRandomNumber(GuestCount.MIN, GuestCount.MAX),
      checkin: getRandomArray(FIX_TIME),
      checkout: getRandomArray(FIX_TIME),
      features: getMixArray(features),
      description: getRandomArray(descriptions),
      photos: getMixArray(photos),
    },
    location: {
      x: getRandomDecimalNumber(35.65000, 35.70000, 5),
      y: getRandomDecimalNumber(139.70000, 139.80000, 5),
    },
  });
};

const pushingAds = () => {

  for (let i = 0; i <= Number.MAX; i++) {
    createAdvertisement(i);
  }

  return ads;
};

export {pushingAds};

