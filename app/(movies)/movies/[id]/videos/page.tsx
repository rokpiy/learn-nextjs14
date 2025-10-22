import { API_URL } from "../../../../constants";
import styles from "../../../../../styles/movie-videos-page.module.css";

async function getVideos(id: string) {
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function VideosPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const videos = await getVideos(id);
    
    return (
        <div className={styles.container}>
            {videos.map((video: any) => (
                <iframe 
                    key={video.id} 
                    src={`https://www.youtube.com/embed/${video.key}`} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.name} 
                />
            ))}
        </div>
    );
}

