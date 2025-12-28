import { Outlet } from "react-router";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import Background from "../Background/Background";

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <div id="content">
        <Outlet />
      </div>
    </>
  );
}

export default App;
