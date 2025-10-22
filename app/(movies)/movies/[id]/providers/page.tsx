import { getMovie } from "@/lib/api";
import styles from "@/styles/movie-providers-page.module.css";

export default async function ProvidersPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const movie = await getMovie(id);
    
    if (!movie.homepage) {
        return <div className={styles.noData}>No official website available for this movie.</div>;
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.homepageContainer}>
                <h2 className={styles.title}>Official Website</h2>
                <p className={styles.description}>Visit the official website for more information about this movie.</p>
                <a 
                    href={movie.homepage} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.homepageLink}
                >
                    Visit Official Website →
                </a>
            </div>
        </div>
    );
}

