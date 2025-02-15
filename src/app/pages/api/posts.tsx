import { NextApiRequest, NextApiResponse } from 'next';

const posts = [
    { id: 1, title: 'Post Pertama', content: 'Ini adalah konten post pertama' },
    { id: 2, title: 'Post Kedua', content: 'Ini adalah konten post kedua' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        return res.status(200).json(posts);
    }

    if (req.method === 'POST') {
        const { title, content } = req.body;
        if (!title || !content) {
            return res
                .status(400)
                .json({ message: 'Judul dan konten harus diisi' });
        }
        const newPost = { id: posts.length + 1, title, content };
        posts.push(newPost);
        return res.status(201).json(newPost);
    }

    return res.status(405).json({ message: 'Method Not Allowed' });
}
