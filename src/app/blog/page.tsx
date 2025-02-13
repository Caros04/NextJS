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
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Daftar Blog</h1>
            <div className="space-y-4">
                {dummyBlogs.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        title={blog.title}
                        desc={blog.desc}
                    />
                ))}
            </div>
        </div>
    );
}
