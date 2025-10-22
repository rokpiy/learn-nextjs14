import { API_URL } from "../../../../(home)/page";
import { getMovie } from "../../../../../components/movie-info";
import styles from "../../../../../styles/movie-credits-page.module.css";

async function getCredits(id: string) {
    const response = await fetch(`${API_URL}/${id}/credits`);
    return response.json();
}

export default async function CreditsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const [credits, movie] = await Promise.all([
        getCredits(id),
        getMovie(id)
    ]);
    
    console.log('Credits data:', credits);
    console.log('Movie data:', movie);
    
    if (!movie) {
        return <div className={styles.noData}>Unable to load production information.</div>;
    }
    
    return (
        <div>
            {/* Production Information */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Production Information</h2>
                <div className={styles.productionInfo}>
                    {movie.release_date && (
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Release Date:</span>
                            <span className={styles.infoValue}>{movie.release_date}</span>
                        </div>
                    )}
                    {movie.production_countries && movie.production_countries.length > 0 && (
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Production Countries:</span>
                            <span className={styles.infoValue}>
                                {movie.production_countries.map((country: any) => country.name).join(", ")}
                            </span>
                        </div>
                    )}
                    {movie.production_companies && movie.production_companies.length > 0 && (
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Production Companies:</span>
                            <div className={styles.companies}>
                                {movie.production_companies.map((company: any) => (
                                    <div key={company.id} className={styles.company}>
                                        {company.logo_path && (
                                            <img 
                                                src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                                                alt={company.name}
                                                className={styles.companyLogo}
                                            />
                                        )}
                                        <span className={styles.companyName}>{company.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {movie.runtime && (
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Runtime:</span>
                            <span className={styles.infoValue}>{movie.runtime} min</span>
                        </div>
                    )}
                    {movie.budget && movie.budget > 0 && (
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Budget:</span>
                            <span className={styles.infoValue}>${movie.budget.toLocaleString()}</span>
                        </div>
                    )}
                    {movie.revenue && movie.revenue > 0 && (
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Revenue:</span>
                            <span className={styles.infoValue}>${movie.revenue.toLocaleString()}</span>
                        </div>
                    )}
                </div>
            </section>

            {credits.cast && credits.cast.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Cast</h2>
                    <div className={styles.grid}>
                        {credits.cast.slice(0, 12).map((person: any) => (
                        <div key={person.id} className={styles.card}>
                            {person.profile_path ? (
                                <img 
                                    src={`https://image.tmdb.org/t/p/w200${person.profile_path}`} 
                                    alt={person.name}
                                    className={styles.photo}
                                />
                            ) : (
                                <div className={styles.noPhoto}>사진 없음</div>
                            )}
                            <div className={styles.info}>
                                <h3 className={styles.name}>{person.name}</h3>
                                <p className={styles.character}>{person.character}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </section>
            )}

            {credits.crew && credits.crew.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Crew</h2>
                    <div className={styles.grid}>
                        {credits.crew.filter((person: any) => 
                            ['Director', 'Producer', 'Screenplay', 'Writer'].includes(person.job)
                        ).slice(0, 12).map((person: any) => (
                        <div key={`${person.id}-${person.job}`} className={styles.card}>
                            {person.profile_path ? (
                                <img 
                                    src={`https://image.tmdb.org/t/p/w200${person.profile_path}`} 
                                    alt={person.name}
                                    className={styles.photo}
                                />
                            ) : (
                                <div className={styles.noPhoto}>No Photo</div>
                            )}
                            <div className={styles.info}>
                                <h3 className={styles.name}>{person.name}</h3>
                                <p className={styles.character}>{person.job}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}

