import Widget from './components/Widget/Widget';

function App() {
  return (
    <div className="app">
      <h1>App</h1>
      <Widget
        temperature={-0.9}
        summary={'어제보다 1.3° 낮아요'}
        location={'서울'}
      />
      <Widget
        temperature={-0.7}
        summary={'어제보다 0.1° 높아요'}
        location={'도쿄'}
      />
      <Widget
        temperature={40}
        summary={'어제보다 1.3° 낮아요'}
        location={'아프리카'}
      />
    </div>
  );
}

export default App;
