import React, { useState } from "react";
import { getExcuse } from "../services/excusesService";

export const Excuses = () =>{
    const [excuse, setExcuse] = useState("");
    const [category, setCategory] = useState("");

    const generateExcuse = async(agenda) =>{
        const {data: response} = await getExcuse(agenda);
        const {excuse,category} = response[0];

        setExcuse(excuse);
        setCategory(category);
    }
    return(
        <div>
            <h1>Generate an Excuse</h1>
            <button onClick={() => generateExcuse("party")}>Party</button>
            <button onClick={() => generateExcuse("family")}>Family</button>
            <button onClick={() => generateExcuse("office")}>Office</button>

            <p>{excuse}</p>
            <p>{category}</p>
        </div>
    );
}