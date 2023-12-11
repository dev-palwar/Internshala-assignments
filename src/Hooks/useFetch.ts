import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

interface ApiResponse {
  hits: Array<{
    objectID: string;
    title: string;
    url: string;
  }>;
}

const useFetch = (query: string) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response: AxiosResponse<ApiResponse> = await axios.get(
          `https://hn.algolia.com/api/v1/search?query=${query}`
        );
        setData(response.data);
      } catch (error) {
        setError('An error occurred while fetching the data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, loading, error };
};

export default useFetch;
