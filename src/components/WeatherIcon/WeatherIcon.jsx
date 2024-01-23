export default function WeatherIcon({ type }) {
  const fileType = type.replace(/\s+/g, '-');
  const image = `/images/Weather/${fileType}.svg`;

  return (
    <>
      <img src={image} alt={type} title={type} />
    </>
  );
}
