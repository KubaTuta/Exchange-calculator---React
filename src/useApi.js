import { useState, useEffect } from "react";

export const useApi = () => {
  const [apiData, setApiData] = useState(null);
  const [todaysDate, setTodaysDate] = useState(null)
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchingData = () => {
      fetch("https://api.nbp.pl/api/exchangerates/tables/c/?format=json")
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText)
          } return response.json();
        })
        .then(data => { setApiData(data[0].rates); setTodaysDate(data[0].effectiveDate); setIsPending(false) })
        .catch((error) => { console.error(error.message) });
    };

    setTimeout(fetchingData, 1000);
  },
    []
  );
  
  return { apiData, todaysDate, isPending }
};