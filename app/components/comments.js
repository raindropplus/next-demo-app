import React from "react";

export default async function Comments({commentsPromices}){
    const comments = await commentsPromices;
    return (
        <div className="mt-6">
             <h2>Comments</h2>
            <ul className="mt-5">
                {
                    comments.map(comment => {
                   return <li key={comment.id}>{comment.body}</li>
                })
                }
            </ul>
        </div>
    )
}