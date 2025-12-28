import { useState } from "react";
import "./Navbar.css";
import AboutIcon from "/about-icon.svg";
import GamesIcon from "/games-icon.svg";
import ProjectsIcon from "/projects-icon.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dateTime, setDateTime] = useState({
    date: "",
    time: "",
  });

  function updateDateTime() {
    const now = new Date();

    const date = now.toLocaleDateString(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    const time = now.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });

    setDateTime({
      date: date,
      time: time,
    });
  }
  setInterval(updateDateTime, 1000);

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
      <div className="date-time">
        <p>{dateTime.time}</p>
        <p>{dateTime.date}</p>
      </div>
    </nav>
  );
};

export default Navbar;
