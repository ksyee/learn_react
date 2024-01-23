// no module (without from)
import '../02-widget.css';

// module
import { createRoot } from 'https://esm.sh/react-dom';

// image
import cloudy from '/src/assets/Widget/Weather/partly_cloudy.png';

const yesterdayDegrees = 0.4;
const todayDegrees = -0.9;

function RenderWidget() {
  return (
    <div className="widget">
      <div className="text-wrapper">
        <span className="temp">{todayDegrees}°</span>
        <span className="notice">
          어제보다 {yesterdayDegrees - todayDegrees}° 낮아요
        </span>
      </div>
      <div className="weather-image">
        <img src={cloudy} alt="cloudy" />
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(RenderWidget());
