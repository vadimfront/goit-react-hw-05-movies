import { axiosClient } from 'axiosConfig';
import { useEffect, useState } from 'react';

export const useFetch = query => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axiosClient.get(query);
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error?.request?.status);
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  return { loading, data, error };
};
