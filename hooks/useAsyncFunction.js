import { useState, useEffect, useCallback } from "react";

export function useAsyncFunction(asyncFunction, startImmediate = true) {
  const [status, setStatus] = useState("idle");
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(() => {
    setStatus("pending");
    setValue(null);
    setError(null);

    return asyncFunction()
      .then((response) => {
        setValue(response);
        setStatus("success");
      })
      .catch((error) => {
        setError(error);
        setStatus("error");
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (startImmediate) {
      execute();
    }
  }, [execute, startImmediate]);

  return { execute, status, value, error };
};
