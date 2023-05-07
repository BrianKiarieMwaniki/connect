import React, { useEffect } from 'react';
import {useState} from 'react';
import { getCatFact } from '../services/catFactsService';

export const CatFacts = () => {
    const [catFact, setCatFact] = useState("");

    useEffect(() => {
        const fetchCatFact = async () =>{
            const fact = await getFact();

            setCatFact(fact);
        }

        fetchCatFact();
    }, []);

    const getFact = async() =>{
        const { data: response } = await getCatFact();

        const { fact } = response;

        return fact;
    }

    const generateCatFact = async () =>{
        const fact = await getFact();
        setCatFact(fact);
    }
    
    return (
      <div>
        <button onClick={generateCatFact}>Generate Cat Fact</button>
        <p>{catFact}</p>
      </div>
    );
};
