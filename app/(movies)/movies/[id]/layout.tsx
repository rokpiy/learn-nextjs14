import { getMovie } from "../../../../components/movie-info";
import styles from "../../../../styles/movie-detail-layout.module.css";
import Navigation from "../../../../components/movie-navigation";

export default async function MovieDetailLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const movie = await getMovie(id);

    return (
        <div className={styles.container}>
            <img src={movie.poster_path} alt={movie.title} className={styles.poster} />
            <div className={styles.content}>
                <Navigation id={id} />
                {children}
            </div>
        </div>
    );
}

