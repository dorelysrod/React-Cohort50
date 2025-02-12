import { useState, useEffect } from "react";

const useFetch = (urls) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!urls || urls.length === 0) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        let responseData = Array.isArray(urls)
          ? await Promise.all(urls.map((url) => fetch(url).then((res) => res.json())))
          : await fetch(urls).then((res) => res.json());
        
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [urls]);

  return { data, loading, error };
};

export default useFetch;