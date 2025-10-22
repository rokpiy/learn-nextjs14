import { API_URL } from "../../../../(home)/page";
import Movie from "../../../../(movies)/movies/movie";
import styles from "../../../../../styles/movie-similar-page.module.css";

async function getSimilarMovies(id: string) {
    const response = await fetch(`${API_URL}/${id}/similar`);
    return response.json();
}

export default async function SimilarPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const similarMovies = await getSimilarMovies(id);
    
    if (!similarMovies || similarMovies.length === 0) {
        return <div className={styles.noData}>No similar movies found.</div>;
    }
    
    return (
        <div className={styles.grid}>
            {similarMovies.map((movie: any) => (
                <Movie 
                    key={movie.id}
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                />
            ))}
        </div>
    );
}

