import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="space-y-12">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Kickstart your Next.js app with Tailwind styling
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            This starter includes a responsive navigation bar, multiple pages, links, and optimized images.
          </p>
          <div className="flex gap-3">
            <Link href="/about" className="btn-primary">Learn more</Link>
            <Link href="/blog" className="inline-flex items-center px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900">
              View Blog
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-gray-200/70 dark:ring-gray-800/70">
          <Image
            src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop"
            alt="Laptop with code editor"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        {[
          {
            title: 'Fast',
            desc: 'Leverage Next.js performance and Image optimization.',
            img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop'
          },
          {
            title: 'Styled',
            desc: 'Design quickly with Tailwind’s utility classes.',
            img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop'
          },
          {
            title: 'Productive',
            desc: 'A neat layout, pages, and components to start shipping.',
            img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop'
          }
        ].map((card) => (
          <div key={card.title} className="rounded-xl overflow-hidden ring-1 ring-gray-200/70 dark:ring-gray-800/70">
            <div className="relative aspect-video">
              <Image
                src={card.img}
                alt={card.title}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}