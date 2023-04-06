//import logo from './logo.svg';
import "./App.css";
//import Header from './component/header/header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/about/about";
import Career from "./pages/Career/carrer";
import Idea from "./pages/Idea/idea";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/career" element={<Career />}></Route>
          <Route path="/idea" element={<Idea />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
