import { notFound } from "next/navigation";
import React from "react";

export default function BlogDetails({params}) {
    const { id } = params;
    if (id === '5') {
        notFound();
    }
    return (<main className="mt-10">
        
        <div>the blog id is: {id}</div>
    </main>);
}