import "./App.css";
import { useNavigate } from "react-router";
import { TIMER } from "../constants/routes";
import Card from "../components/Card";

function App() {
  const navigation = useNavigate();

  const handleNavigate = (time: number) => {
    navigation(TIMER.replace(":time", time.toString()));
  };

  return (
    <div className="app">
      <Card time="10s" onClick={() => handleNavigate(10 * 1000)} />
      <Card time="5m" onClick={() => handleNavigate(5 * 60 * 1000)} />
      <Card time="10m" onClick={() => handleNavigate(10 * 60 * 1000)} />
      <Card time="15m" onClick={() => handleNavigate(15 * 60 * 1000)} />
    </div>
  );
}

export default App;
