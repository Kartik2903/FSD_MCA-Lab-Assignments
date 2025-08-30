import Link from 'next/link';

export function generateStaticParams(): { slug: string }[] {
  return [{ slug: 'getting-started' }, { slug: 'tailwind-tips' }, { slug: 'next-image' }];
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const titles: Record<string, string> = {
    'getting-started': 'Getting Started with Next.js',
    'tailwind-tips': 'Tailwind Tips for Rapid UI',
    'next-image': 'Optimizing Images in Next.js'
  };

  return (
    <section className="space-y-4">
      <Link href="/blog" className="text-sm text-brand-600 hover:underline">← Back to blog</Link>
      <h1 className="text-3xl font-bold">{titles[slug] ?? 'Blog Post'}</h1>
      <p className="text-gray-600 dark:text-gray-300">
        This is a placeholder blog post for <strong>{slug}</strong>. Replace with your content.
      </p>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at facilisis lectus. Phasellus
          feugiat orci in mauris tempor convallis.
        </p>
        <p>
          You can add code blocks, images, and more. This route uses dynamic segments and static params for pre-rendering.
        </p>
      </div>
    </section>
  );
}