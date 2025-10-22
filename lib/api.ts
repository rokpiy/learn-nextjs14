import { API_URL } from "@/constants";

export async function getMovie(id: string) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export async function getVideos(id: string) {
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export async function getCredits(id: string) {
    const response = await fetch(`${API_URL}/${id}/credits`);
    return response.json();
}

export async function getSimilarMovies(id: string) {
    const response = await fetch(`${API_URL}/${id}/similar`);
    return response.json();
}

export async function getMovies() {
    const response = await fetch(API_URL);
    return response.json();
}

