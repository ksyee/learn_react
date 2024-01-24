/* eslint-disable react/jsx-key */

import './25-mapping-over-data.css';
import contactData from '../data/contacts.json';
import { ContactCard, ContactCardList } from './23-contact-card';

export default function Exercise() {
  const { items } = contactData;
  const item = items[0];
  console.log(item);

  return (
    <ContactCardList>
      {items.map((item) => (
        <ContactCard
          key={item.id}
          face={item.face}
          name={item.name}
          job={item.job}
          email={item.email}
          gender={item.gender}
        />
      ))}
    </ContactCardList>
  );
}
