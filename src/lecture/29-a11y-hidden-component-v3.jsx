import { A11yHidden } from '../components';
import bannerImage from '../assets/banner.png';
import classes from './29-a11y-hidden-component.module.css';

const bannerInfo =
  '미래를 향해, 미래를 항해 변화무쌍한 바다를 항해하는 것은 때로는 방향을 바꿔야 할 때도, 또 속도를 조절해야 할 때도 있습니다. 하지만 변함없는 것은 목적지를 향해 꾸준히 항해한다는 것입니다. 미래에도. 미래의 미래에도 행복은 지속가능해야 한다는 믿음으로 SK도 미래를 향해. 미래를 항해하겠습니다.';

function Exercise() {
  return (
    <figure>
      <DemoImg
        imageSource={bannerImage}
        width={1280}
        height={790}
        ratio={2}
        data-testid="demo image"
        aria-label="좋은 세상 만들기"
      >
        <A11yHidden as="a" href="/demo" focusable>
          {bannerInfo}
        </A11yHidden>
        <A11yHidden as="figcaption">{bannerInfo}</A11yHidden>
      </DemoImg>
    </figure>
  );
}

// function ExampleImg() {
//   return <img src={bannerImage} alt={bannerInfo} height={800} />;
// }

function DemoImg({
  imageSource,
  style,
  width = 1280,
  height = 790,
  ratio = 1,
  children,
  ...restProps
}) {
  const classNames = `${classes.demo} ${classes}`;
  const defaultStyle = {
    backgroundImage: `url(${imageSource})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    width: width ? width / ratio : undefined,
    height: height ? height / ratio : undefined,
  };
  return (
    <div
      {...restProps}
      className={classNames}
      role="img"
      style={{ ...defaultStyle, ...style }}
    >
      {children}
    </div>
  );
}

export default Exercise;
