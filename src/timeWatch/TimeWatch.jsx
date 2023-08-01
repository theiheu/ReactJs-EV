import { useRef, useState } from "react";

const TimeWatch = () => {
  const timeRef = useRef(null);
  console.log("object");
  // const [time, setTime] = useState(0);
  const time = useRef(0);
  const [timer, setTimer] = useState(null);

  // const handleStart = () => {
  //   if (timer == null) {
  //     setTimer(
  //       setInterval(() => {
  //         setTime((time) => time + 1);
  //       }, 1000)
  //     );
  //     console.log("object");
  //   }
  // };

  // const handleStop = () => {
  //   clearInterval(timer);
  //   return setTimer(null);
  // };

  const handleStart = () => {
    if (timeRef.current == null) {
      timeRef.current = setInterval(() => {
        time.current++;
        console.log("time.current :>> ", time);
      }, 1000);
      console.log("object");
    }
  };

  const handleStop = () => {
    clearInterval(timeRef.current);
    return (timeRef.current = null);
  };

  return (
    <>
      <p>{time.current} s</p>
      <div className="inline-flex">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l m-1"
          onClick={handleStart}
        >
          Start
        </button>

        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r m-1"
          onClick={handleStop}
        >
          Stop
        </button>
      </div>
    </>
  );
};

export default TimeWatch;
