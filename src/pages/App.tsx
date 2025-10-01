import { useEffect, useState } from "react";
import "./App.css";
import Timer from "../components/Timer";
import { Button } from "../components/ui/Button";
import { Link, useNavigate } from "react-router";
import { TIMER } from "../constants/routes";
import { useAuthContext } from "../hooks/useAuthContext";

function App() {
  // const { count, setCount } = useCountContext()
  const [count, setCount] = useState(5 * 60 * 1000);
  const [isRunning, setIsRunning] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useAuthContext();
  const navigation = useNavigate();

  // call api to get timer id
  const api = {
    id: 1,
    name: "Timer 1",
  };

  useEffect(() => {
    if (!isRunning) return;
    if (count <= 0) {
      navigation(TIMER.replace(":id", api.id.toString()));
      return;
    }
    const interval = setInterval(() => {
      setCount((c) => c - 1000); // 1000ms = 1s decrease
    }, 1000);

    return () => clearInterval(interval);
  }, [count, isRunning]);

  const handleNavigate = () => {
    navigation(TIMER.replace(":id", api.id.toString()));
  };

  return (
    <>
      <Timer count={count} />
      <button onClick={() => setCount(count + 10 * 1000)}>Add 10s</button>
      <button onClick={() => setIsRunning((value) => !value)}>{isRunning ? "Pause" : "Start"}</button>
      <button onClick={() => setCount(count - 10 * 1000)}>Remove 10s</button>
      <Button text="Start 5mins" />
      <Link to={TIMER.replace(":id", api.id.toString())}>Timer</Link>
      <button onClick={handleNavigate}>Navigate to Timer</button>
      <button onClick={() => setIsAuthenticated((value) => !value)}>{isAuthenticated ? "Logout" : "Login"}</button>
    </>
  );
}

export default App;
