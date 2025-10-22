import styles from "@/styles/movie-info.module.css";
import { getMovie } from "@/lib/api";

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);
    return (<div className={styles.container}>
        <img src={movie.poster_path} alt={movie.title} className={styles.poster} />
            <div className={styles.info}>
            <h2 className={styles.title}>{movie.title}</h2>
            <h3 className={styles.vote_average}>⭐️{Number(movie.vote_average).toFixed(1)}</h3>
            <p className={styles.overview}>{movie.overview}</p>
            <p className={styles.genres}>{movie.genres.map((genre: { name: string }) => genre.name).join(", ")}</p>
            <a href={movie.homepage} target="_blank">Homepage &rarr;</a>
            </div>
        </div>
    )
}

