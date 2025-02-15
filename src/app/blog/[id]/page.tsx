import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

export default function BlogPost({
    post,
}: {
    post: { id: string; title: string; content: string };
}) {
    const router = useRouter();

    // Jika halaman belum dibuat oleh Next.js
    if (router.isFallback) {
        return <p>Loading...</p>;
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="mt-4">{post.content}</p>
            <button
                onClick={() => router.push('/')}
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md"
            >
                Kembali ke Beranda
            </button>
        </div>
    );
}

// Menentukan path dinamis berdasarkan ID artikel
export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    const paths = posts.map((post: { id: number }) => ({
        params: { id: post.id.toString() },
    }));

    return { paths, fallback: true };
};

// Mengambil data spesifik berdasarkan ID
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params?.id}`
    );
    const post = await res.json();

    return { props: { post } };
};
