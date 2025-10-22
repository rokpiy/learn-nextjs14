import { API_URL } from "../../../(home)/page";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { Suspense } from "react";

export async function generateMetadata({ params: {id}}: Promise<{ id: string }>) {
    const movie = await getMovie(id);
    return {
        title: movie.title,
    };
}

export default async function MovieDetailPage({ params: {id}}: { params: { id: string } }) {
    
    return (
        <div>
            <Suspense fallback={<div>Loading movie info...</div>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<div>Loading movie videos...</div>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    )
}
