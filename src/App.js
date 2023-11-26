import { BrowserRouter, Routes, Route } from "react-router-dom";
import IncrementCounter from "./pages/IncrementCounter";
import Home from "./pages/Home";
import IncrementCounterTwo from "./pages/IncrementCounterTwo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incrementCounter" element={<IncrementCounter />} exact />
        <Route
          path="/incrementCounterTwo"
          element={<IncrementCounterTwo />}
          exact
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
