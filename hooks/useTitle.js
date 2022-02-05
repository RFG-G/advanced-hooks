import { useRef, useEffect } from "react";

export function useTitle(title, options={restoreOnUnmount:false}) {
  const prevTitleRef = useRef(document.title);
  if (document.title !== title) document.title = title;

  useEffect(() => {
    if (options && options.restoreOnUnmount) {
      return () => {
        document.title = prevTitleRef.current;
      };
    } else {
      return;
    }
  }, []);
}
