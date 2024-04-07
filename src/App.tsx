import { BrowserRouter, Routes } from "react-router-dom";
import { Button } from "./components/ui/button";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
