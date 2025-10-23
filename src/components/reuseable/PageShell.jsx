import Footer from "./Footer";
import Header from "./Header";


export const defaultNav = [
    { label: "Home", href: "/" },
    { label: "Catalog", href: "/catalog" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact", href: "/contact" },
    { label: "Book Online", href: "/book-online" },
];
export default function PageShell({
    title,
    currentPath = "/",
    children,
}) {
    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
            <Header title={title} nav={defaultNav} currentPath={currentPath} />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}
