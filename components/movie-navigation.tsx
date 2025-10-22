"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/movie-detail-layout.module.css";

export default function MovieNavigation({ id }: { id: string }) {
    const pathname = usePathname();
    const isInfo = pathname === `/movies/${id}`;
    const isVideos = pathname === `/movies/${id}/videos`;
    const isCredits = pathname === `/movies/${id}/credits`;
    const isProviders = pathname === `/movies/${id}/providers`;
    const isSimilar = pathname === `/movies/${id}/similar`;

    return (
        <nav className={styles.nav}>
            <Link 
                href={`/movies/${id}`} 
                className={`${styles.navLink} ${isInfo ? styles.active : ""}`}
            >
                Info
            </Link>
            <Link 
                href={`/movies/${id}/videos`} 
                className={`${styles.navLink} ${isVideos ? styles.active : ""}`}
            >
                Videos
            </Link>
            <Link 
                href={`/movies/${id}/credits`} 
                className={`${styles.navLink} ${isCredits ? styles.active : ""}`}
            >
                Credits
            </Link>
            <Link 
                href={`/movies/${id}/providers`} 
                className={`${styles.navLink} ${isProviders ? styles.active : ""}`}
            >
                Website
            </Link>
            <Link 
                href={`/movies/${id}/similar`} 
                className={`${styles.navLink} ${isSimilar ? styles.active : ""}`}
            >
                Similar
            </Link>
        </nav>
    );
}

