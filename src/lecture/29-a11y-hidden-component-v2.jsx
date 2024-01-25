import { A11yHidden } from '../components';
import bannerImage from '../assets/banner.png';

const bannerInfo =
  '미래를 향해. 미래를 항해 변화무쌍한 바다를 항해하는 것은 때로는 방향을 바꿔야 할 때도.  또 속도를 조절해야 할 때도 있습니다.  하지만 변함없는 것은 목적지를 향해 꾸준히 항해한다는 것입니다.  미래에도, 미래의 미래에도 행복은 지속가능해야 한다는 믿음으로 SK도 미래를 향해.  미래를 항해하겠습니다.';

function Exercise() {
  return (
    <figure>
      {/* <ExampleImg /> */}
      <div
        role="img"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '400px',
        }}
      ></div>
      {/* <span>{bannerInfo}</span> */}
      <A11yHidden as="p">{bannerInfo}</A11yHidden>
    </figure>
  );
}

function ExampleImg() {
  return <img src={bannerImage} alt={bannerInfo} height={400} />;
}

export default Exercise;
