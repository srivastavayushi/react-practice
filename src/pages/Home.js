import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-10 h-full">
      <h3 className="text-5xl font-bold text-center">React Tasks</h3>
      <div className="flex flex-wrap items-center justify-center py-10">
        <Link to="/incrementCounter">
          <button className=" py-6 px-20 text-xl bg-blue-600 rounded-md font-bold text-slate-200 m-10 hover:bg-blue-800">
            Increment Counter
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
