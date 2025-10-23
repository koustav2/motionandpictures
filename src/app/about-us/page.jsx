
"use client"
import AboutUsPage from "@/components/About_us";
import PageShell from "@/components/reuseable/PageShell";
import { usePathname } from "next/navigation";

export default function page() {
  const pathname = usePathname(); 

  return (
    <PageShell
      title="Welcome"
      currentPath={pathname}  
    >
      <AboutUsPage/>
    </PageShell>
  );
}
