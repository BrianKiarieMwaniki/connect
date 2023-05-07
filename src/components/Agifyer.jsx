import React, {useState} from 'react';
import { getAgePrediction } from '../services/agifySevices';

export const Agifyer = () =>{
    const [name, setName] = useState("");
    const [predictionData, setpredictionData] = useState({});

    const predictAge = async () =>{
        if(name.length === 0) return;

        const {data:response} = await getAgePrediction(name);        

        console.log(response);
        setpredictionData(response);
    }    

    return (
        <div>
            <input placeholder="name" type="text" onChange={(e) => setName(e.target.value)}/>
            <button onClick={predictAge}>Predict Age</button>
            <h1>Predicted Age for {predictionData?.name} is {predictionData?.age}</h1>
        </div>
    );
}