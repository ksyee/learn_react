import { useState } from 'react';
import A11yHidden from '../components/A11yHidden/A11yHidden-v3';

// 학습주제
// - 컴포넌트 상태(자신 안에서만 사용 가능)

function AccordionPanel({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleTogglePanel = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          handleTogglePanel();
        }}
      >
        {isOpen ? '닫기' : '열기'}
      </button>
      <div>{children}</div>
    </div>
  );
}

function Accordion() {
  const headlineId = crypto.randomUUID();

  return (
    <article className="" aria-labelledby={headlineId}>
      <A11yHidden as="h2" id={headlineId}>
        아코디언을 사용해 컴포넌트 간 상태 공유
      </A11yHidden>
      <AccordionPanel>
        <p>아코디언 컴포넌트임</p>
      </AccordionPanel>
    </article>
  );
}

function Exercise() {
  return (
    <div>
      <h2>상태 끌어올리기</h2>
      <Accordion />
    </div>
  );
}

export default Exercise;
