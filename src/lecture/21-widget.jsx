import tempIcon from '../assets/Widget/Weather/partly_cloudy.png';

function Temp() {
  const temp = -0.9;
  return (
    <>
      <span className="text-20pxr font-black">{temp}°</span>
    </>
  );
}

function Notice() {
  const yesterdayDegrees = 0.4;
  const todayDegrees = -0.9;
  return (
    <>
      <span className="text-12pxr font-medium text-[#6d7478]">
        어제보다 {yesterdayDegrees - todayDegrees}° 낮아요
      </span>
    </>
  );
}

function TempIcon() {
  return (
    <>
      <img src={tempIcon} alt="맑고 구름 조금" />
    </>
  );
}

export default function Widget() {
  return (
    <div className="flex w-192pxr p-16pxr justify-between">
      <div className="flex flex-col">
        <Temp />
        <Notice />
      </div>
      <div>
        <TempIcon />
      </div>
    </div>
  );
}
