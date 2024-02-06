import { useTilt } from '../hooks';

const BOX_COUNT = 9;
const BOX_OPTIONS = {
  reverse: true,
  glare: true,
  'max-glare': 0.5,
};

function Exercise() {
  return (
    <div>
      {Array(BOX_COUNT)
        .fill(null)
        .map((_, index) => {
          <TiltBox key={index} options={BOX_OPTIONS}>
            {index + 1}
          </TiltBox>;
        })}
    </div>
  );
}

function TiltBox({ children, onTilt, options, ...restProps }) {
  const boxRef = useTilt({
    onTilt,
    options,
  });
  return (
    <div
      ref={boxRef}
      className="flex justify-center items-center w-[200px] h-[200px] bg-gray-900 text-gray-50 rounded-lg"
      {...restProps}
    >
      {children}
    </div>
  );
}

export default Exercise;
