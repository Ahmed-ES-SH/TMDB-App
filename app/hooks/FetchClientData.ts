import { useEffect, useState } from "react";
import { instance } from "../_components/_globalComponents/AxiosTool";

// interface UseFetchDataResult<T> {
//   data: T | null;
//   loading: boolean;
//   error: unknown;
//   currentPage?: number;
//   totalPages?: number;
// }

export default function useFetchData<T>(api: string, pagination: boolean) {
  const [data, setData] = useState<T | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await instance.get(api);
        setData(response.data);
        if (pagination) {
          setTotalPages(response.data.total_pages);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [api, pagination]);

  return { data, totalPages, loading };
}
