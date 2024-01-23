import './Widget.css';

function Widget({ temperature, summary, location }) {
  return (
    <article className="widget widget__weather">
      <h2 className="sr-only">{location} 날씨</h2>
      <img
        src="/images/weather-partly-cloudy.svg"
        alt="맑고 구름 조금"
        title="맑고 구름 조금"
      />
      <div className="weather__info" role="group">
        <span className="weather__info--template">{temperature}°</span>
        <span className="weather__info--description">{summary}</span>
      </div>
    </article>
  );
}

export default Widget;
