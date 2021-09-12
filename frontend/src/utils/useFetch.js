import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
      if (!url) {
        return
      }
      const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      };

      return fetchData();
    }, [url]);

    return { isLoading, data };
};

export default useFetch