import { useState, useRef, useEffect } from "react";

export default function IncrementCounterTwo() {
  const [counter, setCounter] = useState(0);
  const [start, setStart] = useState(false);
  const intervalIdRef = useRef(null);

  // useEffect will run everytime counter changes/increases or everytime start state changes
  useEffect(() => {
    if (start) {
      intervalIdRef.current = setInterval(() => {
        setCounter(counter + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [counter, start]);

  // set start state to true triggering rerender -> useEffect where if(start===true) condition
  // will be fulfilled and setInterval function will run increasing counter
  const handleStart = () => {
    setStart(true);
  };

  const handleStop = () => {
    clearInterval(intervalIdRef.current);
    setStart(false);
  };

  const handleSetZero = () => {
    setCounter(0);
    handleStop();
  };
  return (
    <div className="bg-slate-200 h-screen p-10">
      <div className="space-y-5">
        <h3 className="text-3xl font-bold">Problem Statement :</h3>
        <ul className="flex flex-col">
          <li>1. Two Buttons : Start and Stop</li>
          <li>2. On start increment a counter to 0 to 1 every second</li>
          <li>
            3. On stop click pause the counter and on start click again resume
            the counter
          </li>
        </ul>
        <h3 className="text-3xl font-bold">Solution :</h3>
      </div>

      <div className="flex flex-col items-center justify-center border-2 border-amber-800 my-10">
        <button className="py-6 px-20 text-xl bg-blue-300 rounded-md font-bold text-black-600 my-10 width-screen border-2">
          Counter : {counter}
        </button>
        <div>
          <button
            className="py-6 px-20 text-xl bg-green-600 rounded-md font-bold text-slate-200 m-10 hover:bg-green-800"
            onClick={handleStart}
          >
            Start
          </button>
          <button
            className="py-6 px-20 text-xl bg-red-600 rounded-md font-bold text-slate-200 m-10 hover:bg-red-800"
            onClick={handleStop}
          >
            Stop
          </button>
          <button
            className="py-6 px-20 text-xl bg-blue-600 rounded-md font-bold text-slate-200 m-10 hover:bg-blue-800"
            onClick={handleSetZero}
          >
            Set Zero
          </button>
        </div>
      </div>
    </div>
  );
}
