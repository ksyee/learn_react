import Widget from './components/Widget/Widget';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="app">
      <h1>App</h1>
      <Widget
        temperature={-0.9}
        summary={'어제보다 1.3° 낮아요'}
        location={'서울'}
        type={'sunny'}
      />
      <Widget
        temperature={-0.7}
        summary={'어제보다 0.1° 높아요'}
        location={'도쿄'}
        type={'rainy'}
      />
      <Button primary>확인</Button>
      <Button secondary disable>
        취소
      </Button>
    </div>
  );
}

export default App;
