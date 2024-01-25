import '../style.css';

function Button(props) {
  return (
    <button
      type="button"
      style={{
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '4px',
        border: '1px solid',
        borderColor: '#7f7f7f',
        borderRadius: '4px',
        padding: '8px',
        color: '#7f7f7f',
        backgroundColor: '#fff',
      }}
    >
      {props.children}
      {props.buttonIcon}
    </button>
  );
}

export default Button;
