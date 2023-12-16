import { useState } from "react";

const convertToJson = (value) => {
  try {
    if (value === "" || value === undefined) {
      alert(
        "The input should not be empty string or undefined"
      );
      return;
    }
    return JSON.stringify(value);
  } catch (error) {
    console.log("Error converting to json", error);
    return null;
  }
};

function Json() {
  const [value, setValue] = useState();
  const [result, setResult] = useState("");

  return (
    <div className="bg-slate-200 h-screen p-10">
      <div className="space-y-5">
        <h3 className="text-3xl font-bold">
          Problem Statement :
        </h3>
        <ul className="flex flex-col">
          <li>
            Implement a function that converts a Javascript
            value into a JSON string.
          </li>
        </ul>
        <h3 className="text-3xl font-bold">Solution :</h3>
        <div className="flex flex-col items-start justify-center border-2 border-amber-800 my-10 p-10">
          <form className="flex flex-col items-start justify-center w-full">
            <div className="w-full flex flex-col gap-4">
              <label className="text-xl font-semibold text-blue-500">
                Enter a Javascript value here :{" "}
              </label>
              <textarea
                type="text"
                id="jsvalue"
                name="jsvalue"
                onChange={(e) => setValue(e.target.value)}
                className="w-full"
                rows={6}
              />
            </div>

            <button
              className="py-4 px-20 text-xl bg-blue-300 rounded-md font-bold text-black-600 my-10 width-screen border-2"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                const res = convertToJson(value);
                setResult(res);
              }}
            >
              Convert
            </button>
          </form>
          {result !== "" && result !== undefined && (
            <div className="w-full space-y-4">
              <div className="text-xl font-semibold text-blue-500">
                Result{" "}
              </div>
              <div className="bg-yellow-200 w-full p-4 rounded-md">
                <div className="text-result-700">
                  The type of result is : {typeof result}
                </div>
                {result}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Json;
