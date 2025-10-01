import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../services/moviesService";
import { MOVIES_KEY } from "../../constants/queryKeys";

export const useMovies = () => {
  return useQuery({ queryKey: [MOVIES_KEY], queryFn: getMovies });
};
