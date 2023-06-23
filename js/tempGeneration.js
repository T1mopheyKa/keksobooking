import {
  pushingAds
} from './data.js';

const templateCard = document.querySelector('#card')
  .content.querySelector('article');


const createCards = (dataDetail) => {
  const fragmentCard = document.createDocumentFragment();

  for (let i = 0; i < dataDetail.length; i++) {
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

    const tempFeatures = tempInfoCard.querySelector('.popup__features').children;
    const featureItem = dataDetail[i].offer.features;

    [...tempFeatures].forEach((item) => {

      let verify = false;

      for (let j = 0; j < featureItem.length; j++) {

        if ([...item.classList].join(' ').split('--').includes(featureItem[j])) {
          verify = true;
        }

      }

      verify === true ? 1 : item.remove();
    });

    tempInfoCard.querySelector('.popup__description').textContent = dataDetail[i].offer.description;

    const fragmentPhotos = document.createDocumentFragment();
    const tempPhotos = tempInfoCard.querySelector('.popup__photos');


    dataDetail[i].offer.photos.forEach((photo) => {

      let tempPhoto = tempPhotos.querySelector('.popup__photo').cloneNode(true);
      tempPhoto.src = photo;

      tempPhotos.append(tempPhoto);
    });

    tempPhotos.children[0].remove();
    tempPhotos.append(fragmentPhotos);

    const tempAvatar = tempInfoCard.querySelector('.popup__avatar');
    tempAvatar.src = dataDetail[i].author.avatar;

    fragmentCard.append(tempInfoCard);
  }

  return fragmentCard;
};

const canvasMap = document.querySelector('#map-canvas');

canvasMap.append(createCards(pushingAds()));

console.log(createCards(pushingAds()));
