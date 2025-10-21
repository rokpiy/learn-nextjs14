"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
export default function Navigation(){
    const pathname = usePathname();
    return (
        <nav>
            <Link href="/">Home</Link> {pathname === "/" ? "v" : ""}
            <Link href="/about-us">About Us</Link> {pathname === "/about-us" ? "v" : ""}
            <Link href="/not-found">Not Found</Link> {pathname === "/not-found" ? "v" : ""}
        </nav>
    )
}