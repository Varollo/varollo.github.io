import { Link } from "react-router-dom";

import Folder from "../../components/Folder/Folder";
import Window from "../../components/Window/Window";

import "./GamesPage.css";

const GamesPage = () => {
  return (
    <Window title="MY GAMES">
      <div className="gamesBox gamesHeader">
        <p>C:/users/varollo/My Games</p>
      </div>

      <div className="gamesBox gamesContent">
        <Link to="https://varollo.itch.io/who-killed-allita">
          <Folder name="Who Killed Alita?" />
        </Link>
        <Link to="https://varollo.itch.io/intensive-bugs">
          <Folder name="Intensive Bugs" />
        </Link>
        <Link to="https://gorxer.itch.io/paws-for-a-cause">
          <Folder name="Paws for a Cause" />
        </Link>
      </div>
    </Window>
  );
};

export default GamesPage;
