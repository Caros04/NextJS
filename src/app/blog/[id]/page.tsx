import React from 'react';

export default function BlogPost({ params }: { params: { id: string } }) {
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold">Blog Post {params.id}</h1>
            <p className="text-gray-700">
                Ini adalah halaman blog dengan ID {params.id}.
            </p>
        </div>
    );
}
