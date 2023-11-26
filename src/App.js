import { BrowserRouter, Routes, Route } from "react-router-dom";
import IncrementCounter from "./pages/IncrementCounter";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incrementCounter" element={<IncrementCounter />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
