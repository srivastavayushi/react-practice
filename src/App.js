import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import IncrementCounter from "./pages/IncrementCounter";
import Home from "./pages/Home";
import IncrementCounterTwo from "./pages/IncrementCounterTwo";
import RetryPromise from "./pages/RetryPromise";
import Json from "./pages/Json";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/incrementCounter"
          element={<IncrementCounter />}
          exact
        />
        <Route
          path="/incrementCounterTwo"
          element={<IncrementCounterTwo />}
          exact
        />
        <Route
          path="/retryPromise"
          element={<RetryPromise />}
          exact
        />
        <Route
          path="/jsvaluetojsonstring"
          element={<Json />}
          exact
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
