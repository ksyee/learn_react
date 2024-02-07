import { typeIs, CustomPropTypes } from '@/utils';
import classes from './Avatar.module.css';

function Avatar({ photo, name = '', isOnline = false }) {
  const status = isOnline ? '온라인' : '오프라인';

  return (
    <figure className={classes.Avatar}>
      <img src={photo} alt={name} />
      <figcaption
        className={isOnline ? classes.online : ''}
        aria-label={status}
        title={status}
      />
    </figure>
  );
}

// 컴포넌트 설계자로서 속성 타입 검사 추가
// 리액트 속성(props) 타입 검사
// 컴포넌트.propTypes = {}
// 매뉴얼 검사 : 속성() { 타입 검사 }

Avatar.propTypes = {
  // photo: string
  photo: CustomPropTypes.string,
  name: CustomPropTypes.string,
  isOnline: CustomPropTypes.boolean,
};

export default Avatar;
