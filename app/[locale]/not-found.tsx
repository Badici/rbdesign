import Link from "next/link";

import { Section } from "@/components/ui/section";

export default function NotFound() {
  return (
    <Section>
      <h1 className="font-[var(--font-display)] text-4xl">Page not found</h1>
      <p className="mt-4 text-muted">The requested route does not exist in this locale.</p>
      <Link href="/en" className="mt-6 inline-block text-accent hover:text-accent-strong">
        Return to homepage
      </Link>
    </Section>
  );
}
