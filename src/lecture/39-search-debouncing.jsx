import { useState } from 'react';
import { FormInput, Stack } from '@/components';

const KEYWORDS =
  '리액트, 뷰, 리액트 라우터, 텐스택 쿼리, 그래프 쿼리, 넥스트 제이에스, 엑시오스'.split(
    ', '
  );

Object.freeze(KEYWORDS);

export default function Exercise() {
  return (
    <div>
      <h2>검색 폼</h2>
      <SearchForm />
    </div>
  );
}

function SearchForm() {
  // 상태 (시간의 흐름에 따라 값이 변함)
  const [query, setQuery] = useState('');

  const handleQuery = (e) => {
    setQuery(setQuery(e.target.value));
  };

  // 파생된 상태(derived state)란? (선언된 상태에 의존하여 값이 변경되는 상태)

  const filteredKeywords = KEYWORDS.filter((keyword) =>
    keyword.includes(query)
  );

  return (
    <Stack vertical gap={20}>
      <form action="">
        <FormInput
          type="search"
          onChange={handleQuery}
          label="학습 주제"
          placeholder="공부할 주제를 검색어로 입력"
          hiddenLabel
          inputProps={{
            style: {
              padding: '4px 12px',
            },
          }}
        />
      </form>
      <Stack
        as="ul"
        vertical
        gap={8}
        style={{ marginBlock: 0, paddingInlineStart: 0, listStyle: 'none' }}
      >
        {filteredKeywords.map((keywords) => {
          return (
            <li key={keywords} style={{ fontSize: 14 }}>
              {keywords}
            </li>
          );
        })}
      </Stack>
    </Stack>
  );
}
