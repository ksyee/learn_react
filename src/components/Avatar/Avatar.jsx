import './Avatar.css';

function Avatar({ photo, name = '', isOnline = false }) {
  const status = isOnline ? 'online' : 'offline';
  return (
    <figure className="Avatar">
      <img src={photo} alt={name} />
      <figcaption aria-label={status} title={status} />
    </figure>
  );
}

// HTML -> JSX -> DATA
// Markup -> Component Design (props)

export default Avatar;
