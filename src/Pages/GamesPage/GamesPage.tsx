import Folder from "../../components/Folder/Folder";
import Window from "../../components/Window/Window";

import { gamesPageData } from "./gamesPageData";

import "./GamesPage.css";

const GamesPage = () => {
  return (
    <Window title="MY GAMES">
      <div className="gamesBox gamesHeader">
        <p>C:/users/varollo/My Games</p>
      </div>

      <div className="gamesBox gamesContent">
        {gamesPageData.map((data, i) => (
          <a key={`${data.title}_${i}`} href={data.url}>
            <Folder name={data.title} />
          </a>
        ))}
      </div>
    </Window>
  );
};

export default GamesPage;
