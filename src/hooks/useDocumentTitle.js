import { useLayoutEffect } from 'react';

const SERVICE_HEADLINE = '최강 멋.사 프론트엔드 8기';

export default function useDocumentTitle(headlineContent) {
  useLayoutEffect(() => {
    document.title = `${headlineContent} ← ${SERVICE_HEADLINE}`;
  }, [headlineContent]);
}
