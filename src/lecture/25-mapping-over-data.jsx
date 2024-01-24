import './25-mapping-over-data.css';
import contactData from '../data/contacts.json';

// [질문] Array 이터레이터 프로토콜일까요?
//        문(statement)
//        for of 문을 사용할 수 있나요? (O)

export default function Exercise() {
  const { item } = contactData;
  const result = item.map(({ id, name, email }, index) => {
    return (
      <li style={listStyle} key={index}>
        <span>{id}</span> <span>{name}</span> <span>{email}</span>
      </li>
    );
  });
  return <ul>{result}</ul>;
}

const listStyle = {
  display: 'flex',
  flexFlow: 'column',
  marginBlockEnd: 20,
};
