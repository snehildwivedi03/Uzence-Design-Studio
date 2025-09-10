import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import InputDemo from "./pages/InputDemo";
import TableDemo from "./pages/TableDemo";
import "./styles/theme.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<InputDemo />} />
        <Route path="/table" element={<TableDemo />} />
      </Routes>
    </>
  );
}
