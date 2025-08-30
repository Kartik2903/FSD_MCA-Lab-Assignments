export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200/60 dark:border-gray-800/60">
      <div className="container-max py-8 text-sm text-gray-500 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>&copy; {new Date().getFullYear()} Next Tailwind Starter</p>
        <p>
          Built with <span className="text-brand-600">Next.js</span> and{' '}
          <span className="text-brand-600">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
}