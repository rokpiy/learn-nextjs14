"use client";

import Link from "next/link";
import styles from "../../../styles/movie.module.css";
import { useRouter } from "next/navigation";

export default function Movie({title, poster_path, id}: {title: string, poster_path: string, id: string}) {
    const router = useRouter();
    const onClick = () => {
        router.push(`/movies/${id}`);
    }
    return (
        <div className={styles.movie}>
            <h3>{title}</h3>
            <img src={poster_path} alt={title} onClick={onClick}/>
            <Link href={`/movies/${id}`}>View Details</Link>
        </div>
    )
}