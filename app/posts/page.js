import getAllPosts from "@/lib/getAllposts";
import Link from "next/link";
import React from "react";

export default async function posts() {
    const posts = await getAllPosts();
    return (
        <div className="mt-6">
            <h1>All posts</h1>
            <ul className="mt-6">
                {
                    posts.map(post => {
                        return <li key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>
                    })
                }

            </ul>
        </div>
    )
}