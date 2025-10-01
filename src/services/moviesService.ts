import type { GetMoviesPopularResponse } from "../types/api/movies.type";
import api from "./api";

const getMovies = async () => {
    const response = await api.get<GetMoviesPopularResponse>("/movie/popular", {
        params: {
            page: 1,
            language: "fr-FR",
        },
    });
    return response.data;
}

export { getMovies };