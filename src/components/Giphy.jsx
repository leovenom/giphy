import React, {useEffect, useState} from "react";
import axios from "axios";
import Loader from "./Loader";

const Giphy = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
    
  useEffect(()=> {
     const fetchData = async () => {
      setIsError(false)  
      setIsLoading(true)

      try {
        const results = await axios(
          "https://api.giphy.com/v1/gifs/trending", {
            params: {
              api_key:'w3pDICM0iVgPovQb7sYOjbXvfOHnXX1k',
              limit:  100
            }
        });

        console.log(results)
        setData(results.data.data);

      } catch (err) {
        setIsError(true)
        setTimeout(()=> setIsError(false), 4000)
      }

      


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
  const renderError = () => {
    if(isError) {
      return (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          Unable to get  Gifs, please try  againin a few minutes
        </div>
      );
    }
  };

  const  handleSearchChange =  (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = async event => {

    event.preventDefault();
    setIsError(false);
    setIsLoading(true);
    
    const results = await axios("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key:'w3pDICM0iVgPovQb7sYOjbXvfOHnXX1k',
        q: search
      } 
    })
    setData(results.data.data);
    setIsLoading(false);
  };

  return ( 


  <div className="m-2">
    {renderError()}
    <form className="form-inline justify-content-center m-2">
      <input 
        value={search}
        onChange={handleSearchChange}
        Type="text"
        placeholder="search"
        className="form-search"
      />
      <button onCLick={handleSubmit} type="submit" className="btn btn -primary mx-2">
      go
      </button>
    </form>
    <div className="right-scene">{renderGifs()}</div>
  </div>
  );
};

export default Giphy; 

