import BlogCard from '@/components/BlogCard';

const dummyBlogs = [
    {
        id: '1',
        title: 'Belajar Next.js',
        desc: 'Panduan lengkap belajar Next.js untuk pemula.',
    },
    {
        id: '2',
        title: 'Tailwind CSS untuk Pemula',
        desc: 'Bagaimana cara styling cepat dengan Tailwind?',
    },
    {
        id: '3',
        title: 'Fetching Data di Next.js',
        desc: 'SSR, SSG, dan ISR dalam Next.js.',
    },
];

export default function BlogsPage() {
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Daftar Blog</h1>
            <div className="space-y-4">
                {dummyBlogs.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        title={blog.title}
                        desc={blog.desc}
                    />
                ))}
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Test
                </button>
                <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                        Lihat Blog
                    </button>
                    <button className="bg-gray-600 text-white px-4 py-2 rounded-lg transform hover:scale-105 transition duration-300">
                        Tambah Blog
                    </button>
                </div>
            </div>
        </div>
    );
}
