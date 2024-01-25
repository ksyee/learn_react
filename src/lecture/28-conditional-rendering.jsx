export default function Exercise() {
  // 로그인 여부 (상태 변수, 랜덤 값)
  let isSignin = false;

  // 로그인 여부에 따라 조건부 렌더링 마크업
  let markup = <></>;

  if (isSignin) {
    console.log('로그인 상태');
    markup = <div>대시보드 페이지 표시</div>;
  } else {
    console.log('로그아웃 상태');
    markup = <div>로그인 페이지 표시</div>;
  }

  return markup;
}
