import React from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

const mockUsers: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
  { id: 3, name: 'Carla Gomez', email: 'carla@example.com' },
];

export default function RegisteredUsers() {
  return (
    <section className="bg-white/5 p-6 rounded-lg shadow-sm ring-1 ring-white/5">
      <h2 className="text-2xl font-semibold text-white mb-4">Registered Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-sm text-gray-300">Name</th>
              <th className="px-4 py-2 text-left text-sm text-gray-300">Email</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {mockUsers.map((u) => (
              <tr key={u.id}>
                <td className="px-4 py-3 text-sm text-gray-100">{u.name}</td>
                <td className="px-4 py-3 text-sm text-gray-400">{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
