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
  const [tableContent, setTableContent] = useState([]);

  const tableContentLength = tableContent.length;

  useEffect(() => {
    const controller = new AbortController();
    fetchProducts({ signal: controller.signal }).then((data) =>
      setTableContent(data?.items)
    );

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="text-2xl text-indigo-500 mt-7">
      <h2>Exercise</h2>

      <DataTable contents={tableContent} />
      <DataTableItemCount count={tableContentLength} />
    </div>
  );
}

function DataTable({ contents }) {
  return (
    <table className="border-2 border-solid border-zinc-500">
      <caption>표 제목</caption>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">NAME</th>
          <th scope="col">CREATE</th>
        </tr>
      </thead>
      <tbody>
        {contents &&
          contents.map((content) => {
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
  return <output className="mt-4 block">{count}</output>;
}
