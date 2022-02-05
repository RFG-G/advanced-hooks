import { useState } from "react";

export function useToggle(status = false) {
  const [state, setState] = useState(status);
  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};
