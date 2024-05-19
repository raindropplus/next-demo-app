"use client";
import react from "react";

export default function Button(){
    return(
        <main className="mt-5">
            <button className="bg-green-500 rounded-sm p-2" onClick={()=>console.log('click here')}>click here</button>
        </main>
    )
}