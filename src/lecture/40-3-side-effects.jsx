import { A11yHidden, Stack } from '@/components';
import { useEffect, useState } from 'react';

const API = `${
  import.meta.env.VITE_PB_API
}/api/collections/original_contents/records`;

async function fetchProducts(options) {
  try {
    const response = await fetch(`${API}`, options);
    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof DOMException) {
      console.error('요청이 취소되었습니다.');
    }
  }
}

export default function Exercise() {
  const [isLoading, setIsLoading] = useState(true);
  const [tableContents, setTableContents] = useState([]);

  useEffect(() => {
    setIsLoading(true); // 로딩 시작

    const controller = new AbortController();
    fetchProducts({ signal: controller.signal }).then((data) => {
      setTableContents(data?.items);
      setIsLoading(false); // 로딩 종료
    });

    fetchProducts({ signal: controller.signal }).then((data) => {
      setTableContents(data?.items);
      setIsLoading(false);
    });

    // 신호를 통해 중복된 요청일 경우 웹 요청을 취소(abort)
    // 클린업
    return () => {
      controller.abort();
    };
  }, []);

  const tableContentsLength = tableContents?.length;

  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  if (isLoading) {
    return <div role="alert">데이터 로딩 중...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl text-indigo-500 mt-7">Exercise</h2>
      <CountUpDown />
      <DataTable contents={tableContents} />
      <DataTableItemCount count={tableContentsLength} />
    </div>
  );
}

const COUNT_KEY = 'count';

// persist local storage

const getLocalStorageCount = () => {
  const count = JSON.parse(localStorage.getItem(COUNT_KEY));
  return count ?? 0;
};

function CountUpDown() {
  const [count, setCount] = useState(getLocalStorageCount);

  const handleInc = () => {
    const nextCount = count + 1;
    localStorage.setItem(COUNT_KEY, JSON.stringify(nextCount));
    setCount(nextCount);
  };

  const handleDec = () => {
    const nextCount = count - 1;
    localStorage.setItem(COUNT_KEY, JSON.stringify(nextCount));
    setCount(nextCount);
  };

  const buttonStyle = 'px-4 py-1 bg-sky-800 text-white rounded-md';

  return (
    <Stack gap={6}>
      <button
        className={buttonStyle}
        type="button"
        onClick={handleDec}
        aria-label="1 감소"
      >
        -
      </button>
      <output className="text-2xl font-bold">{count}</output>
      <button
        className={buttonStyle}
        type="button"
        onClick={handleInc}
        aria-label="1 증가"
      >
        +
      </button>
    </Stack>
  );
}

function DataTable({ contents }) {
  const tableStyle = 'w-full border-2 border-solid border-sky-600';
  const borderStyle = 'border border-solid border-sky-600';

  return (
    <table className={tableStyle}>
      <A11yHidden as="caption">표 제목</A11yHidden>
      <colgroup>
        <col width="160" />
        <col width="240" />
        <col width="100" />
      </colgroup>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">NAME</th>
          <th scope="col">CREATE</th>
        </tr>
      </thead>
      <tbody>
        {contents?.map((content) => (
          <tr key={content.id}>
            <td className={borderStyle}>{content.id}</td>
            <td className={borderStyle}>{content.name}</td>
            <td className={borderStyle}>{content.created}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function DataTableItemCount({ count }) {
  return (
    <output className="mt-2 block py-1 px-2 rounded border border-solid border-sky-600">
      {count}
    </output>
  );
}
