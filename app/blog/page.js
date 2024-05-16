import Link from "next/link";
import React from "react";

export default function Blog() {
    const blogs = [
        { id : 1, title: 'post 1', description: 'post 1 description' },
        { id : 2, title: 'post 2', description: 'post 2 description' },
        { id : 3, title: 'post 3', description: 'post 3 description' },
        { id : 4, title: 'post 4', description: 'post 4 description' }

    ]
    return (<main className="mt-10">
        
        <ul>
            {blogs.map(blog => {
                return (<li className="mb-5" key={blog.id}><Link href={`/blog/${blog.id}`}>{blog.title}</Link></li>)
            }
            )}
        </ul>
    </main>);
}