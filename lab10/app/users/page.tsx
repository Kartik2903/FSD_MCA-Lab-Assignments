import RegisteredUsers from "../components/RegisteredUsers";

export const metadata = {
  title: "Users | Next.js Web Application",
  description: "View and manage registered users in our system."
};

export default function UsersPage() {
  return (
    <div className="min-h-screen py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">User Management</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            View and manage all registered users in our system.
          </p>
        </div>
        
        <div className="mt-12">
          <RegisteredUsers />
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            This is a secure area. All actions are logged for security purposes.
          </p>
        </div>
      </div>
    </div>
  );
}
