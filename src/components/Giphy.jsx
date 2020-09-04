import React, {useEffect, useState} from "react";
import axios from "axios";
import Loader from "./Loader";

const Giphy = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
    
  useEffect(()=> {
     const fetchData = async () => {
        setIsLoading(true)
      const results = await axios(
        "https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key:'w3pDICM0iVgPovQb7sYOjbXvfOHnXX1k',
            limit: 500
          }
      });

      console.log(results)
      setData(results.data.data);

      setIsLoading(false)
     };
 
     fetchData()
  }, []);

  const renderGifs = () => {
      if(isLoading) {
        return <Loader />;
      }
    return data.map(el => { 
      return (
        <div key={el.id} className="gif">
          <img src={el.images.fixed_height.url}/>
        </div>
      );
    });
  };

  return <div className="right-scene">{renderGifs()}</div>;
};

export default Giphy; 