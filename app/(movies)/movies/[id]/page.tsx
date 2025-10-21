import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { Suspense } from "react";

export default async function MovieDetail({ params: {id}}: { params: { id: string } }) {
    
    return (
              <div>
            <h3>Movie detail page</h3>
            <Suspense fallback={<div>Loading movie info...</div>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<div>Loading movie videos...</div>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    )
}
