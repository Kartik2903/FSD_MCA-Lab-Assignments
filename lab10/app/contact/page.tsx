export const metadata = {
  title: 'Contact | Next.js + Tailwind Starter'
};

import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <section className="max-w-2xl space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-gray-600 dark:text-gray-300">
        This form is non-functional and intended as a UI example. Hook it to your API or service.
      </p>

      <ContactForm />
    </section>
  );
}