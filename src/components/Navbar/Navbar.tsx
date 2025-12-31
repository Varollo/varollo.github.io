import "./Navbar.css";
import AboutIcon from "/about-icon.svg";
import GamesIcon from "/games-icon.svg";
import ProjectsIcon from "/projects-icon.svg";
import { Link } from "react-router-dom";
import DateTime from "../DateTime/DateTime";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-buttons">
        <Link to={{ pathname: "/projects" }}>
          <button>
            <img src={ProjectsIcon} alt="Projects"></img>
          </button>
        </Link>

        <Link to={{ pathname: "/about" }}>
          <button>
            <img src={AboutIcon} alt="About"></img>
          </button>
        </Link>

        <Link to={{ pathname: "/games" }}>
          <button>
            <img src={GamesIcon} alt="Games"></img>
          </button>
        </Link>
      </div>
      <DateTime />
    </nav>
  );
};

export default Navbar;
