import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | Next.js + Tailwind Starter'
};

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
};

const posts: Post[] = [
  {
    slug: 'getting-started',
    title: 'Getting Started with Next.js',
    excerpt: 'Set up your development environment and create your first page.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop'
  },
  {
    slug: 'tailwind-tips',
    title: 'Tailwind Tips for Rapid UI',
    excerpt: 'Practical tips to speed up your styling workflow.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop'
  },
  {
    slug: 'next-image',
    title: 'Optimizing Images in Next.js',
    excerpt: 'Use next/image for performance and responsiveness.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop'
  }
];

export default function BlogPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="group rounded-xl overflow-hidden ring-1 ring-gray-200/70 dark:ring-gray-800/70">
            <div className="relative aspect-video">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">
                <Link href={`/blog/${post.slug}`} className="hover:text-brand-600">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-brand-600 hover:underline">
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}