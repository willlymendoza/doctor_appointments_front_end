import { useEffect, useState } from "react";
import http from "../http-common";

const useFetch = ({ url, method, data = "", userToken }) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let didCancel = false;
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await http(userToken)({
          method,
          url,
          data,
        });
        if (!didCancel) setResponse(result.data);
      } catch (error) {
        if (!didCancel) setError(error);
      }
      setIsLoading(false);
    };
    getData();

    return () => {
      didCancel = true;
    };
  }, [data, method, url, userToken]);

  return { response, error, isLoading };
};

export default useFetch;
