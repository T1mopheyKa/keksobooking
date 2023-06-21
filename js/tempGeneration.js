import {
  pushingAds
} from './data.js';

const templateCard = document.querySelector('#card')
  .content.querySelector('article');


const createCards = (dataDetail) => {
  const fragmentCard = document.createDocumentFragment();

  //dataDetail.length
  for (let i = 0; i < 1; i++) {
    const tempInfoCard = templateCard.cloneNode(true);

    tempInfoCard.querySelector('.popup__title').textContent = dataDetail[i].offer.title;
    tempInfoCard.querySelector('.popup__text--address').textContent = dataDetail[i].offer.address;
    tempInfoCard.querySelector('.popup__text--price').textContent = `${dataDetail[i].offer.price} ₽/ночь`;

    let typeResult = '';

    if (dataDetail[i].offer.type === 'flat') {
      typeResult = 'Квартира';
    } else if (dataDetail[i].offer.type === 'bungalow') {
      typeResult = 'Бунгало';
    } else if (dataDetail[i].offer.type === 'palace') {
      typeResult = 'Дворец';
    } else if (dataDetail[i].offer.type === 'house') {
      typeResult = 'Дом';
    } else if (dataDetail[i].offer.type === 'hotel') {
      typeResult = 'Отель';
    }

    tempInfoCard.querySelector('.popup__type').textContent = typeResult;
    tempInfoCard.querySelector('.popup__text--capacity').textContent = `${dataDetail[i].offer.rooms} комнаты для ${dataDetail[i].offer.guests} гостей`;
    tempInfoCard.querySelector('.popup__text--time').textContent = `Заезд после ${dataDetail[i].offer.checkin}, выезд до ${dataDetail[i].offer.checkout}`;

    const tempFeatures = tempInfoCard.querySelector('.popup__features');
    const tempListFeatures = tempFeatures.children;

    [...tempListFeatures].forEach((item) => {

      const tempItem = dataDetail[i].offer.features;

      let counter = 0;

      for (let j = 0; j < tempItem.length; j++) {
        if (item.classList[1] === `popup__feature--${tempItem[j]}`) {
          counter++;
        }
      }

      counter > 0 ? 1 : item.remove();

      console.log(tempItem);
    });

    console.log(tempListFeatures)

    fragmentCard.append(tempInfoCard);
  }

  return fragmentCard;
};

console.log(createCards( pushingAds()) );
