async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
}

export default async function UsersPage() {
    const users = await getUsers();

    interface User {
        id: number;
        name: string;
        email: string;
    }

    return (
        <div className="max-w-lg mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Users List</h1>
            <ul className="space-y-2">
                {users.map((user: User) => (
                    <li key={user.id} className="p-2 bg-gray-100 rounded">
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}
