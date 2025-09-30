import { useEffect, useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import { Button } from "./components/ui/Button";

function App() {
  // const { count, setCount } = useCountContext()
  const [count, setCount] = useState(5 * 60 * 1000);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (count <= 0 || !isRunning) return;
    const interval = setInterval(() => {
      setCount((c) => c - 1000); // 1000ms = 1s decrease
    }, 1000);

    return () => clearInterval(interval);
  }, [count, isRunning]);

  return (
    <>
      <Timer count={count} />
      <button onClick={() => setCount(count + 10 * 1000)}>Add 10s</button>
      <button onClick={() => setIsRunning((value) => !value)}>{isRunning ? "Pause" : "Start"}</button>
      <button onClick={() => setCount(count - 10 * 1000)}>Remove 10s</button>
      <Button text="Start 5mins" />
    </>
  );
}

export default App;
