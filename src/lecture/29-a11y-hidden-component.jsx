import { A11yHidden } from '../components';
// import bannerImage from '../assets/banner.png';
import { getStaticImage } from '../utils/getStaticAsset';

function Exercise() {
  return (
    <figure>
      <img src={getStaticImage('faces/woman-02.jpg')} alt="" />
    </figure>
  );
}

export default Exercise;
