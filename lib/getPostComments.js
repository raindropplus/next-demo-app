export default async function getPostComments(id){
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts/'+id+'/comments');
    return posts.json();
}