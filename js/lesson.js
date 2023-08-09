/* const lexicalEnvironment = {
  variable: {},
  parentLink: {
    // внешнее лексическое окружение
  },
};

const createIncrement = () => {
  let count = 0;

  function increment() {
    count++;
  }

  console.log(count);

  function log() {
    console.log(count);
  }

  return [log, increment];
}

const [log, increment] = createIncrement();

log();

increment();
increment();
increment();
log(); */

const Person = {
  Name: 'Kenny',
  Age: 20,
  City: 'Toronto',
  Family: {
    Mother: 'Landa',
    Father: 'Frenk',
    Sister: 'Katy',
  }
};

const {Name: firstName, Age, City, Family: {Mother}} = Person;

// console.log(firstName, Age, City, Mother);

const names = ['Boris', 'Nick', 'John', 'Tim', ['monkey']];

const [first, second, third, fourth, [fifth]] = names;
// console.log(first, second, third, fourth, fifth);

// Область видимости -- это контекст выполнения, в котором видны значения и выражения, на которые можно ссылаться
// Лексическое окружение -- это невидимый обьект, который имеет ссылку на внешнее лекс. окр и на переменные внутри себя

// Map - типа как обьект, но с возможностью сохранения типа ключа, будьто это цифра, символ. Обьект так не может - у него, все строка...
// .set(key, value) - записывает значение по ключу
// .get(key) - возвращаем значение по ключу
// .has(key) - вовзращает булевое, если есть/нет key в коллекции map
// .delete(key) - удаляет ключ
// .clear - очищает коллекцию от всех элементов
// .size - длинна коллекции


const map = new Map();

map.set('name', 'Kendal');
map.set('lastName', 'Jonson');

// console.log(map.get('name'));
// console.log(map.size);
// console.log(map.has('name'));

let john = { name: "John" };

// давайте сохраним количество посещений для каждого пользователя
let visitsCountMap = new Map();

// объект john - это ключ для значения в объекте Map
visitsCountMap.set(john, 123);

// console.log(map.entries());

let recipeMap = new Map([
  ["огурец", 500],
  ["помидор", 350],
  ["лук",    50]
]);

for (let vegetable of recipeMap.keys()) {
  // console.log(vegetable);
}


const Products = {
  'tomato': 300,
  'potato': 150,
  'apple': 200,
}

/* console.log(Object.entries(Products));

const tempObj = Object.fromEntries(Object.entries(Products));
console.log(tempObj);
 */




/* const tempObj = new Map(Object.entries(Products));

console.log(tempObj.get('tomato'));


const tempArray = Object.fromEntries([
  ['name', 'George'],
  ['lastname', 'Swift'],
  ['age', 20],
]);

// console.log(tempArray);


const listName = ['John', 'Sid', 'John', 'Alex', 'Alex', 'Margo'];
const NameCollection = new Set([...listName]);

console.log(NameCollection); */


/* let secondMap = new Map();
secondMap.set('banana', 1);
secondMap.set('orange', 2);
secondMap.set('meat', 4);

console.log(Object.fromEntries(secondMap.entries())); */

/*
const partial = { id: 100, name: 'Howard Moon' }
const user = { ...partial, id: 20, password: 'Password!' }

console.log(user); */

const user3 = {
  name: 'Naboo',
  id: 300,
  password: 'Password!',
}

// const organize = (object) => ({name: undefined, id: object.id,  ...object})
const removeProperty = (prop) => ({[prop]: _, ...rest}) => rest;

const removePassword = removeProperty(password);

console.log(removeProperty(user3));
