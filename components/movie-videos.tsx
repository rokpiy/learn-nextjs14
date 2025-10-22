import styles from "@/styles/movie-vidoes.module.css";
import { getVideos } from "@/lib/api";

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    return <div className={styles.container}>
        {videos.map(video => (
            <iframe 
            key={video.id} 
            src={`https://www.youtube.com/embed/${video.key}`} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.name} 
            />
        ))}
    </div>
}

