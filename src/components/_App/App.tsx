import { Outlet } from "react-router";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import Background from "../Background/Background";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <div id="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
