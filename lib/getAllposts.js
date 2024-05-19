export default async function getAllPosts() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
        next: { revalidate: 10 }
    });

    if (!posts.ok) {
        throw new Error('There was an error on feaching posts.')
    }
    return posts.json();
}