import Window from "../../components/Window/Window";
import { projectsPageData } from "./ProjectsPageData";

import "./ProjectsPage.css";

const ProjectsPage = () => {
  return (
    <Window title="Projects" mode="dark">
      <div className="projectsWindow">
        <p>
          <span className="terminalTxt">varollo@Gabriel-Carollo:</span> $ ls
        </p>

        {projectsPageData.map((data, i) => (
        <div key={`${data.title}_${i}`} className="projectHighlight">
          <h2>{data.title}</h2>
          <div className="projectDescription">
            <p>{data.description}</p>
            <a href={data.url}>
              Open on GitHub...
            </a>
          </div>
        </div>
      ))}

        <p>
          <span className="terminalTxt">varollo@Gabriel-Carollo:</span> $_
        </p>
      </div>
    </Window>
  );
};

export default ProjectsPage;
