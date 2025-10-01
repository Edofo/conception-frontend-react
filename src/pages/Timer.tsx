import { Link, useParams } from "react-router";
import { HOME } from "../constants/routes";

const TimerPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <p>Timer {id}</p>
      <Link to={HOME}>Home</Link>
    </>
  );
};

export default TimerPage;
