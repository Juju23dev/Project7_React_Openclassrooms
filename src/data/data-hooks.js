import { getData, getDataById } from './async-data';
import { useEffect ,useState } from 'react';

export const useAsyncFetch = (fetchFunction, ...functionParams) => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    ( async () => {
      try {
        setData(await fetchFunction(...functionParams));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    )()
  }, [fetchFunction, functionParams]);

  return { isLoading, data, error };
};

export const useData = () => useAsyncFetch(getData);

export const useDatatById = (id) => useAsyncFetch(getDataById, id);

