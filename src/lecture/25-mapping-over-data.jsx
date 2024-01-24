import './25-mapping-over-data.css';
import contactData from '../data/contacts.json';

// [질문] Array 이터레이터 프로토콜일까요?
//        문(statement)
//        for of 문을 사용할 수 있나요? (O)

for (const item of contactData) {
  console.log(item);
}

console.log('---------------------------');

// 식(expression)
// forEach, map, filter, ...

contactData.items.forEach((item) => {
  console.log(item);
});

// map (리액트에서 많이 사용하는 배열 이터레이터)
const mapResult = contactData.items.map((item) => {
  return item;
});

console.log(mapResult);

// filter
const filteredResult = contactData.items.filter((item) => {
  return item.name === '박선호';
});

console.log(filteredResult);

export default function Exercise() {
  return null;
}
