import { useEffect, useState } from "react";
import http from "../http-common";

const useFetch = ({ url, method, userToken }) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let didCancel = true;

    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await http(userToken)({
          method: "GET",
          url,
        });
        if (didCancel) setResponse(result.data);
      } catch (error) {
        if (didCancel) setError(error);
      } finally {
        if (didCancel) setIsLoading(false);
      }
    };

    getData();

    return () => {
      didCancel = false;
    };
  }, [method, url, userToken]);

  return { response, error, isLoading };
};

export default useFetch;
