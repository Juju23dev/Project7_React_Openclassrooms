import { getData, getDataById } from './async-data';
import { useEffect ,useState } from 'react';

export const useData = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    ( async () => {
      try {
        setData(await getData);
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false);
      }
    }
    )()
  }, [])

  return { isLoading, data, error };
};

export const useDatatById = (id) => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    ( async () => {
      try {
        setData(await getDataById(id));
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false);
      }
    }
    )()
  }, [id])

  return { isLoading, data, error };
};
