import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to={"/home"}>Home</Link>
          {" "}
          <Link to={"/about"}>About</Link>
        </nav>

        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
