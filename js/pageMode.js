const formList = document.querySelectorAll('form');

const notLoadingMap = () => {

  formList.forEach((form) => {
    form.disabled = true;

    [...form.children].forEach((children) => children.disabled = true);

    form.classList.add(`${form.classList[0]}--disabled`);
  });

};

notLoadingMap();

const uploadingMap = () => {
  formList.forEach((form) => {
    form.disabled = false;

    [...form.children].forEach((children) => children.disabled = false);

    form.classList.remove(`${form.classList[0]}--disabled`);
  });
};

uploadingMap();


