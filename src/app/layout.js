import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Motion And Capture Films | Best Video Editing Company in India",
    description: "Motion and Capture Films offers professional video editing services that turn raw footage into polished, impactful stories. From corporate promos and documentaries to weddings and social media content, we deliver cinematic edits with expert color grading, sound design, motion graphics, and more. Our team ensures every frame supports your vision, creating visually compelling content that engages and resonates with your audience.",
    icons: {
        icon: [
            { url: "/mac_fabicon.png", type: "image/png" },        // SVG (optional)
        ],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" >
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> {children} </body>
        </ html >
    );
}