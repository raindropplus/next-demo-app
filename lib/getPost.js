export default async function getPost(id){
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts/'+id);
    return posts.json();
}