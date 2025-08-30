import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center space-y-4">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-gray-600 dark:text-gray-300">Page not found.</p>
      <Link href="/" className="btn-primary">Go home</Link>
    </div>
  );
}