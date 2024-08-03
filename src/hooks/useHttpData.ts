import { useEffect, useState } from "react";

export default function useHttpData<T>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    async function hook() {
      const controller = new AbortController();
      const { signal } = controller;
      setLoading(true);
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: { meals: T[] } = await response.json();
        if (!ignore) {
          setData(data.meals);
        }
        console.log(data.meals);
      } catch (error) {
        console.log("error");
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
      return () => {
        ignore = true;
        controller.abort();
      }; // esto es para abortar la peticion en caso que se renderise dos veces
    }

    hook();
  }, []);
  return { loading, data, setData, setLoading };
}
