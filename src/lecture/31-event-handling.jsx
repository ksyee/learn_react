export default function Exercise() {
  function handleClick(e) {
    console.log(e.target);
  }

  return (
    <div
      style={{
        display: 'flex',
        gap: 20,
        padding: 20,
        border: '1px solid black',
      }}
      onClick={handleClick}
    >
      <strong
        style={{
          padding: 20,
          border: '1px solid red',
        }}
        onClick={handleClick}
      >
        Hover
      </strong>{' '}
      <em
        style={{
          padding: 20,
          border: '1px solid green',
        }}
        onClick={handleClick}
      >
        me!
      </em>
    </div>
  );
}
