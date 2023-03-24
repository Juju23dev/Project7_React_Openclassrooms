import { useEffect ,useState } from 'react';
import { getData, getDataById } from './async-data';

/**
 * @File is functions simulate asynchronus data fecthing with random timeout
 * 
 * @param {
 *    fetchFunction : function,
 *    ...functionParams : any
 * } useAsyncFetch 
 * @return a use for async fetching data that use 
 * the function and his parameter resigned in paramter
 * 
 * @param {} useData 
 * @return a hook for fectch all data
 * 
 * @param {id : number} useDatatById
 * @return a hook for fectch data with linked Id
**/

const useAsyncFetch = (fetchFunction, ...functionParams) => {
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
