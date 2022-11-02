import { useState, useEffect } from 'react';
import API_KEY from '../keys';

const CONTEXT_KEY = "40fbca2782fc249c5";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
        const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`);
        const result = await res.json();
        setData(result);
        // fetch(
        //     `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        // )
        // .then(response => response.json())
        // .then(result => {
        //     setData(result)
        // })
    }

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;