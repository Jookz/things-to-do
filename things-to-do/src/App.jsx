import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Idea from "./components/Idea";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/idea/*" element={<Idea />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
