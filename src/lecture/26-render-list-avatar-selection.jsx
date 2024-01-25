import Avatar from '../components/Avatar/Avatar';
import contactData from '../data/contacts.json';

console.log(contactData.items);

function Exercise() {
  return (
    <ul>
      {contactData.items.map((contact) => {
        const photoUrl = `/images/faces/${contact.gender}-0${contact.face}.jpg`;
        console.log(photoUrl);

        return (
          <li key={contact.id}>
            <Avatar photo={photoUrl} name={contact.name} isOnline={true} />
          </li>
        );
      })}
    </ul>
  );
}

export default Exercise;
