
"use client"
import { usePathname } from "next/navigation";
import PageShell from "./PageShell";
import Home from "../Home/Home";

export default function App() {
  const pathname = usePathname();

  return (
    <PageShell
      title="Welcome"
      currentPath={pathname}   
    >
      <Home/>
    </PageShell>
  );
}
