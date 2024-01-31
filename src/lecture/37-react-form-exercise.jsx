function Exercise() {
  return (
    <div>
      <h2>폼 컨트롤</h2>
      <form>
        <div
          style={{
            display: 'flex',
            gap: 4,
          }}
        >
          <label htmlFor="feel-today">오늘 기분</label>
          <input
            id="feel-today"
            type="text"
            placeholder="공부하기 좋은 날이네~"
          />
        </div>
      </form>

      <div
        style={{
          border: '1px solid',
          marginBlock: 12,
          padding: 20,
        }}
      >
        <output>폼 입력 내용 출력</output>
      </div>
    </div>
  );
}

export default Exercise;
