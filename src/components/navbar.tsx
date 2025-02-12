import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">My Blog</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="hover:underline">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="hover:underline">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:underline">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
