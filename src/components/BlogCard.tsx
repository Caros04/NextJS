export default function BlogCard({
    title,
    desc,
}: {
    title: string;
    desc: string;
}) {
    return (
        <div className="bg-white shadow-lg rounded-xl p-4 border border-gray-200">
            <h2 className="text-xl font-bold text-blue-600">{title}</h2>
            <p className="text-gray-700">{desc}</p>
        </div>
    );
}
