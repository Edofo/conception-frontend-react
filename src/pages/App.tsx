import "./App.css";
import { useNavigate } from "react-router";
import { TIMER } from "../constants/routes";
import Card from "../components/Card";
import { useMovies } from "../hooks/api/useMovies";

function App() {
  const navigation = useNavigate();

  // const [movies, setMovies] = useState<Movie[]>([]);

  const handleNavigate = (time: number) => {
    navigation(TIMER.replace(":time", time.toString()));
  };

  // const fetchMovies = async () => {
  //   const movies = await getMovies();
  //   console.log(movies);
  //   setMovies(movies.results);
  // };

  // useEffect(() => {
  //   fetchMovies();
  // }, []);

  // const { data: movies } = useQuery({ queryKey: ["movies"], queryFn: getMovies });
  const { data: movies } = useMovies();

  return (
    <div className="app">
      <Card time="10s" onClick={() => handleNavigate(10 * 1000)} />
      <Card time="5m" onClick={() => handleNavigate(5 * 60 * 1000)} />
      <Card time="10m" onClick={() => handleNavigate(10 * 60 * 1000)} />
      <Card time="15m" onClick={() => handleNavigate(15 * 60 * 1000)} />
      {movies?.results.map((movie) => (
        <div key={movie.id}>
          <img src={movie.poster_path} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
