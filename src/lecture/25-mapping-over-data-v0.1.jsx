/* eslint-disable react/jsx-key */

import './25-mapping-over-data.css';
import contactData from '../data/contacts.json';
import { ContactCard, ContactCardList } from './23-contact-card';

export default function Exercise() {
  const { items } = contactData;
  const item = items[0];
  console.log(item);

  const children = items.map(({ id, name, email }) => {
    return (
      <li style={listStyle}>
        <span>{id}</span>
        <span>{name}</span>
        <span>{email}</span>
      </li>
    );
  });
  // return <ul>{children}</ul>;

  // x = 3
  // y = x + 7

  return (
    <ul>
      {items.map(({ id, name, email }) => (
        <li style={listStyle}>
          <span>{id}</span>
          <span>{name}</span>
          <span>{email}</span>
        </li>
      ))}
    </ul>
  );
}
