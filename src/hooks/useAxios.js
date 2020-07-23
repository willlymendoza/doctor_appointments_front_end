import { useState, useEffect } from "react";
import axios from "axios";

export default function useAxios(url, options) {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(url);

        setResult(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    })();
  }, [options, url]);

  return { loading, result, error };
}
