const typeHouseList = document.querySelector('select[name="type"]');
const priceField = document.querySelector('input[name="price"]');

const TypeHousing = {
  'palace': 10000,
  'flat': 1000,
  'house': 5000,
  'bungalow': 0,
  'hotel': 3000,
};

typeHouseList.addEventListener('change', () => {
  priceField.placeholder = TypeHousing[typeHouseList.value];
});

const timeInList = document.querySelector('select[id="timein"]');
const timeOutList = document.querySelector('select[id="timeout"]');

timeInList.addEventListener('change', () => {
  timeOutList.value = timeInList.value;
});

