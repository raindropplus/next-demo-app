import Comments from "@/app/components/comments";
import getAllPosts from "@/lib/getAllposts";
import getPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComments";
import React, { Suspense } from "react";


export async function generateMetadata({ params }) {
    const { id } = params;
    const post = await getPost(id);

    return {
        title: post.title,
        description: post.body,
    }
}

export default async function PostDetails({ params }) {
    const { id } = params;
    const post = await getPost(id);
    return (
        <div className="mt-6">
            <h1 className="text-blue-500">{post.title}</h1>
            <p className="mt-3">{post.body}</p>
            <Suspense fallback="Loading comments...">
                <Comments commentsPromices={getPostComments(id)} />
            </Suspense>

        </div>
    )
}

export async function generateStaticParams(){
    const posts = await getAllPosts();
    return posts.map((post) =>({id : post.id.toString()}))
}