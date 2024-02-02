import { useState, useEffect } from 'react';

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
  const [isLoading, setIsLoading] = useState(false);
  const [tableContents, setTableContents] = useState([]);

  useEffect(() => {
    setIsLoading(true); // 로딩 시작

    const controller = new AbortController();
    fetchProducts({ signal: controller.signal }).then((data) => {
      setTableContents(data?.items);
      setIsLoading(false); // 로딩 종료
    });

    return () => {
      controller.abort();
    };
  }, []);

  const tableContentsLength = tableContents?.length;

  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  return (
    <div>
      <h2 className="text-2xl text-indigo-500 mt-7">Exercise</h2>

      <DataTable contents={tableContents} />
      <DataTableItemCount count={tableContentsLength} />
    </div>
  );
}

function DataTable({ contents }) {
  return (
    <table className="border-2 border-solid border-zinc-500">
      <caption>표 제목</caption>
      <col width={160} />
      <col width={240} />
      <col width={100} />
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">NAME</th>
          <th scope="col">CREATE</th>
        </tr>
      </thead>
      <tbody>
        {contents &&
          contents?.map((content) => {
            return (
              <tr key={content.id}>
                <td>{content.id}</td>
                <td>{content.name}</td>
                <td>{content.created}</td>
              </tr>
            );
          })}
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
