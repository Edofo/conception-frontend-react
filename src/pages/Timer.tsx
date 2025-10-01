import { Link, useNavigate, useParams } from "react-router";
import { HOME } from "../constants/routes";
import { useEffect, useState } from "react";
import Timer from "../components/Timer";

const TimerPage = () => {
  const { time } = useParams();

  const [count, setCount] = useState(Number(time ?? 0));
  const [isRunning, setIsRunning] = useState(false);
  const navigation = useNavigate();

  useEffect(() => {
    if (!isRunning) return;
    if (count <= 0) {
      navigation(HOME);
      return;
    }
    const interval = setInterval(() => {
      setCount((c) => c - 1000); // 1000ms = 1s decrease
    }, 1000);

    return () => clearInterval(interval);
  }, [count, isRunning]);

  return (
    <>
      <Timer count={count} />
      <button onClick={() => setIsRunning((value) => !value)}>{isRunning ? "Pause" : "Start"}</button>
      <Link to={HOME}>Home</Link>
    </>
  );
};

export default TimerPage;
