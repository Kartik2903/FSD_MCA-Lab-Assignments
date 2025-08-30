import Image from 'next/image';

export const metadata = {
  title: 'About | Next.js + Tailwind Starter'
};

export default function AboutPage() {
  return (
    <section className="grid lg:grid-cols-2 gap-10 items-start">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">About this project</h1>
        <p className="text-gray-600 dark:text-gray-300">
          This is a minimal Next.js template showcasing Tailwind CSS styling, a reusable navigation bar,
          Next.js Link usage, and optimized images via next/image. Use it as a base for your own projects.
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
          <li>App Router structure</li>
          <li>Responsive navigation with active link styling</li>
          <li>Remote images configured and optimized</li>
          <li>Clean, accessible components</li>
        </ul>
      </div>

      <div className="relative aspect-square w-full overflow-hidden rounded-xl ring-1 ring-gray-200/70 dark:ring-gray-800/70">
        <Image
          src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1600&auto=format&fit=crop"
          alt="Workspace"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}