import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        let responseData;

        if (Array.isArray(url)) {
          const responses = await Promise.all(url.map((singleUrl) => fetch(singleUrl)));
          
          const isSuccess = responses.every((response) => response.ok);
          if (!isSuccess) throw new Error('One or more requests failed');

          responseData = await Promise.all(responses.map((res) => res.json()));
        } else {
          const response = await fetch(url);
          if (!response.ok) throw new Error('Failed to fetch data');
          responseData = await response.json();
        }

        setData(responseData);
      } catch (err) {
        console.error('Fetch Error: ', err);
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;