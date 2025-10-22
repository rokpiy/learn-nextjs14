import { getMovie } from "../../../../components/movie-info";
import styles from "../../../../styles/movie-info-page.module.css";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const movie = await getMovie(id);
    return {
        title: movie.title,
    };
}

export default async function MovieDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const movie = await getMovie(id);
    
    return (
        <div className={styles.info}>
            <h2 className={styles.title}>{movie.title}</h2>
            <h3 className={styles.vote_average}>⭐️{Number(movie.vote_average).toFixed(1)}</h3>
            <p className={styles.overview}>{movie.overview}</p>
            <p className={styles.genres}>{movie.genres.map((genre: { name: string }) => genre.name).join(", ")}</p>
            <a href={movie.homepage} target="_blank" className={styles.homepage}>Homepage &rarr;</a>
        </div>
    )
}
