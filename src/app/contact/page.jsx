
"use client"
import ContactSection from "@/components/Contact/Contact";
import PageShell from "@/components/reuseable/PageShell";
import { usePathname } from "next/navigation";

export default function page() {
  const pathname = usePathname();

  return (
    <>
      <style jsx global>{`
      footer { display: none !important; }
    `}</style>

      <PageShell
        title="Welcome"
        currentPath={pathname}
      >
        <ContactSection />
      </PageShell>
    </>
  );
}
