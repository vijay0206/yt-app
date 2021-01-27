import { useState, useEffect } from "react";
import youtube from "../api/Youtube";

const useVidoes = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const result = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(result.data.items);
  };

  // ==> this is React convention which is to return array
  return [videos, search];

  // ==> this is javascript way , just for knwoing purpose being mentioned over here
  // return { videos, onTermSubmit };
};

export default useVidoes;
