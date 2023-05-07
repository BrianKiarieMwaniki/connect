import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import { getCatFact } from "../services/catFactsService";


export const Home = () => {
    const {username} = useContext(AppContext);
    const {data,isLoading, error} = useQuery(["cat"],async() =>
    {
        const {data} = await getCatFact();

        return data;

    });

    if(isLoading) return "Loading...";

    if(error) return "error ";

  return (
    <div>
        {username.length === 0 ? <h1>Welcome Home😋</h1> : <h1>Welcom, home {username} 😁</h1>}

        <div>
            {data?.fact}
        </div>
    </div>
  );
  
};
