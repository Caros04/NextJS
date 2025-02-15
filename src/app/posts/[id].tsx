import { GetServerSideProps } from 'next';
import Link from 'next/link';

export default function PostDetail({
    post,
}: {
    post: { id: number; title: string; content: string };
}) {
    return (
        <div className="max-w-2xl mx-auto mt-10 p-4 border rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-700">{post.content}</p>

            <Link href="/">
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                    ⬅ Kembali ke Beranda
                </button>
            </Link>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const res = await fetch(`http://localhost:3000/api/posts/${params?.id}`);
    const post = await res.json();
    return { props: { post } };
};
