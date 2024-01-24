export default function Button(props) {
  return (
    <button
      type={props.type ?? 'button'}
      className="cursor-pointer select-none border-full py-4pxr px-12pxr border-2 border-current bg-transparent text-[#0008] disabled:text-white"
      disabled={props.disable}
    >
      {props.children}
    </button>
  );
}
