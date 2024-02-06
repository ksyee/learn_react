import { useTilt } from '@/hooks';
import { range } from '@/utils';
import { Tilt } from 'react-tilt';

const BOX_COUNT = 9;
const BOX_OPTIONS = {
  reverse: true,
  glare: true,
  'max-glare': 0.7,
};

function Exercise() {
  return (
    <>
      <div className="flex gap-2">
        {range(1, BOX_COUNT, 2).map((n, i) => (
          <TiltBox key={i} options={BOX_OPTIONS}>
            {n}
          </TiltBox>
        ))}
      </div>
      <div>
        {range(40, 90, 7).map((n) => {
          <Tilt
            key={n}
            className="bg-black h-250pxr w-250pxr"
            options={BOX_OPTIONS}
          >
            <span>🏠</span>
          </Tilt>;
        })}
      </div>
    </>
  );
}

function TiltBox({ children, onTilt = null, options = {}, ...restProps }) {
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
