import { useLayoutEffect } from 'react';

export function useDocumentTitle(title) {
  useLayoutEffect(() => {
    window.document.title = title;
  }, [title]);
}
