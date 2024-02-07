import typeIs from './typeIs';

// 네임 스페이스(Namespace) 객체
const CustomPropTypes = Object.freeze({
  string(props, propName, componentName) {
    const propValue = props[propName];
    const propType = typeIs(propValue);

    if (propType !== 'string') {
      throw new Error(
        `${componentName} 컴포넌트 ${propName} 속성은 "문자(string)" 타입이 요구되나, 실제 전달된 속성은 "${propType}" 타입입니다. 😳`
      );
    }
  },
  boolean(props, propName, componentName) {
    const propValue = props[propName];
    const propType = typeIs(propValue);

    if (propType !== 'boolean') {
      throw new Error(
        `${componentName} 컴포넌트 ${propName} 속성은 "불리언(boolean)" 타입이 요구되나, 실제 전달된 속성은 "${propType}" 타입입니다. 😳`
      );
    }
  },
});

export default Object.freeze(CustomPropTypes);
