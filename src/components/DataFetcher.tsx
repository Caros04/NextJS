import { useEffect, useState } from 'react';



export default function DataFetcher() {
    const [posts, setPosts] = useState([]);

    

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(
                'https://jsonplaceholder.typicode.com/posts'
            );
            const data = await res.json();
            setPosts(data.slice(0, 5));
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1 className="text-2xl">Daftar Post</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className="border-b py-2">
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
