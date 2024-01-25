import './Avatar.css';

function Avatar(
  /* props */
  { photo, name, isOnline = false }
) {
  return (
    <figure>
      <img src={photo} alt={name} />
      <figcaption>{isOnline ? '온라인' : '오프라인'}</figcaption>
    </figure>
  );
}

export default Avatar;
