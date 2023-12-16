import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-10">
      <h3 className="text-5xl font-bold text-center">
        React / Javascript Tasks
      </h3>
      <div className="flex flex-wrap items-center justify-center py-10">
        <Link to="/incrementCounter">
          <button className=" py-6 px-20 text-xl bg-blue-600 rounded-md font-bold text-slate-200 m-10 hover:bg-blue-800">
            Increment Counter
          </button>
        </Link>
        <Link to="/incrementCounterTwo">
          <button className=" py-6 px-20 text-xl bg-blue-600 rounded-md font-bold text-slate-200 m-10 hover:bg-blue-800">
            Increment Counter : Sol 2
          </button>
        </Link>
        <Link to="/retryPromise">
          <button className=" py-6 px-20 text-xl bg-blue-600 rounded-md font-bold text-slate-200 m-10 hover:bg-blue-800">
            Retry Promises
          </button>
        </Link>
        <Link to="/jsvaluetojsonstring">
          <button className=" py-6 px-20 text-xl bg-blue-600 rounded-md font-bold text-slate-200 m-10 hover:bg-blue-800">
            Javascript value to JSON string
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
