import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Beauty from "./components/pages/Beauty";
import Navbar from "./components/Navbar";

import NoPage from "./components/pages/NoPage";
import Makeups from "./components/pages/Makeups";


export default function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="beauty" element={<Beauty/>} />
          <Route path="makeups" element={<Makeups/>} />

          <Route path="*" element={<NoPage />} />
        </Routes>

    </BrowserRouter>
  );
}
