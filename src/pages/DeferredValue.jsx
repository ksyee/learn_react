import Exercise from '@/lecture/deferred-value/Exercise-01';
import { useDocumentTitle } from '@/hooks';

function DeferredValuePage() {
  useDocumentTitle('Deferred Value');

  return (
    <>
      <h2 className="my-5">상태 업데이트 지연</h2>
      <Exercise />
    </>
  );
}

export default DeferredValuePage;
