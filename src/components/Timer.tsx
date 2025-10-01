import { useCallback } from "react";

type TimerProps = {
  count: number;
};

const Timer = ({ count }: TimerProps) => {
  const timerRender = useCallback((ms: number): string => {
    const min = Math.floor(ms / (60 * 1000));
    const sec = Math.floor((ms % (60 * 1000)) / 1000);
    return min + ":" + sec;
  }, []);

  return (
    <>
      <p>{timerRender(count)}</p>
    </>
  );
};

export default Timer;
