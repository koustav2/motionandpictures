
"use client"
import WorkIntroSection from "@/components/Cataloge";
import ShowcaseGrid from "@/components/Catalouge";
import PageShell from "@/components/reuseable/PageShell";
import { usePathname } from "next/navigation";

export default function page() {
  const pathname = usePathname();

  return (
    <PageShell
      title="Welcome"
      currentPath={pathname}
    >
      <WorkIntroSection />
      <ShowcaseGrid/>
    </PageShell>
  );
}
