import Image from 'next/image';

export default function BlogPage() {
    return (
        <main className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center">Blog Page</h1>
            <p className="text-center text-gray-600 mt-2">
                Ini adalah halaman contact. Konten akan segera hadir!
            </p>
            <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
            />
        </main>
    );
}
